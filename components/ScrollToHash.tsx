'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToTarget = () => {
      if (typeof window === 'undefined') return;
      const hash = window.location.hash;
      if (!hash) return;

      const id = decodeURIComponent(hash.replace('#', ''));
      const targetElement = document.getElementById(id);
      if (targetElement) {
        const headerOffset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        targetElement.classList.add('case-highlight-active');
        setTimeout(() => {
          targetElement.classList.remove('case-highlight-active');
        }, 3600);
      }
    };

    // Run on multiple intervals to catch post-hydration / DOM paint accurately
    const t1 = setTimeout(scrollToTarget, 60);
    const t2 = setTimeout(scrollToTarget, 220);
    const t3 = setTimeout(scrollToTarget, 500);

    window.addEventListener('hashchange', scrollToTarget);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener('hashchange', scrollToTarget);
    };
  }, [pathname]);

  return null;
}
