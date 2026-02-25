const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading text-xl font-bold text-primary-foreground">
              Adhesive<span className="text-secondary">Pro</span>
            </p>
            <p className="text-primary-foreground/60 text-sm mt-1">Authorized KLEIBERIT Distributor</p>
          </div>
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} AdhesivePro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
