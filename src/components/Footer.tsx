interface FooterLink {
  name: string;
  href: string;
}

interface FooterProps {
  copyright?: string;
  legalLinks?: FooterLink[];
  className?: string;
}

const defaultProps: FooterProps = {
  copyright: "© 2024 Shadcnblocks.com. All rights reserved.",
};

const Footer2 = (props: FooterProps) => {
  const { copyright, legalLinks, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={className}>
      <div className="max-w-4xl mx-auto p-6">
        <footer>
          <div className="my-8 flex flex-col justify-between gap-4 border-t border-border py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {legalLinks?.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer2;
