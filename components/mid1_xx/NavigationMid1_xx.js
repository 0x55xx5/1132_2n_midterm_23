import Link from 'next/link';

export default function NavigationMid1_xx() {
  return (
    <nav className='z-10 text-xl'>
      <ul className='flex gap-16 items-center'>
        <li>
          <Link
            href='/mid1_23/p1_23'
            className='hover:text-accent-400 transition-colors'
          >
            p1_23
          </Link>
        </li>
        <li>
          <Link
            href='/mid1_23/p2_23'
            className='hover:text-accent-400 transition-colors'
          >
            p2_23
          </Link>
        </li>
        <li>
          <Link
            href='/mid1_23/p3_23'
            className='hover:text-accent-400 transition-colors'
          >
            p3_23
          </Link>
        </li>
        <li>
          <Link
            href='/mid1_23/p4_23'
            className='hover:text-accent-400 transition-colors'
          >
            p4_23
          </Link>
        </li>
      </ul>
    </nav>
  );
}
