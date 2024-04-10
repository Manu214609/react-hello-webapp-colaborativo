import React from "react";

export const Footer = () => (
    <footer className="footer mt-auto py-3 text-center">
        <div className="container">
            <span className="text-muted">© 2024 Nombre de tu empresa</span>
            <div>
                <a href="mailto:info@tudominio.com" className="mx-2">info@tudominio.com</a>
                <a href="tel:+123456789" className="mx-2">123-456-789</a>
            </div>
            <div>
                <a href="/privacy-policy" className="mx-2">Política de privacidad</a>
                <a href="/terms-of-service" className="mx-2">Términos de servicio</a>
            </div>
            <div>
                <a href="https://www.facebook.com/tupagina" target="_blank" className="mx-2">Facebook</a>
                <a href="https://twitter.com/tupagina" target="_blank" className="mx-2">Twitter</a>
                <a href="https://www.linkedin.com/company/tupagina" target="_blank" className="mx-2">LinkedIn</a>
            </div>
        </div>
    </footer>
);