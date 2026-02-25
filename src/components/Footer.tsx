const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} KLEJBER Kleje Przemysłowe s.c. Wszystkie prawa zastrzeżone
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
