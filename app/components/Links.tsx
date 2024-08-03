import Link from "next/link";

export const Links = () => {
  return (
    <div>
      <ul>
        <li>
          (template)
          <ul>
            <li>
              <Link href="/">root</Link>
            </li>
            <li>
              <Link href="/page1">page1</Link>
            </li>
            <li>
              <Link href="/page2">page2</Link>
            </li>
            <li>
              group1 (with template)
              <ul>
                <li>
                  <Link href="/group1/page1">page1</Link>
                </li>
                <li>
                  <Link href="/group1/page2">page2</Link>
                </li>
              </ul>
            </li>
            <li>
              group2 (with layout)
              <ul>
                <li>
                  <Link href="/group2/page1">page1</Link>
                </li>
                <li>
                  <Link href="/group2/page2">page2</Link>
                </li>
              </ul>
            </li>
            <li>
              group3 (with layout and template)
              <ul>
                <li>
                  <Link href="/group3/page1">page1</Link>
                </li>
                <li>
                  <Link href="/group3/page2">page2</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
