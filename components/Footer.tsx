const Footer: React.FC = () => {
    return (
        <footer className="py-8 mt-12 border-t border-gray-100 text-sm text-muted flex justify-between">
            <div className="flex flex-col space-y-2">
                <span>© {new Date().getFullYear()}</span>
            </div>
            <div className="flex space-x-4">
                <a href="mailto:example@example.com" className="hover:text-foreground transition-colors">email</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">github</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">linkedin</a>
            </div>
        </footer>
    );
};

export default Footer;
