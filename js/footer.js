// footer.js - Reusable footer component for Sonitori Resort website

(function() {
    // Get the current path to handle relative URLs correctly
    const getBasePath = () => {
        const path = window.location.pathname;
        const depth = (path.match(/\//g) || []).length - 1;
        return depth > 0 ? '../'.repeat(depth) : './';
    };

    const basePath = getBasePath();
    
    const footerHTML = `
        <footer class="footer">
            <div class="footer-grid">
                <div class="footer-logo">
                    <img src="${basePath}images/Logo-white.png" style="width:200px;" alt="Sonitori">
                </div>
                <div>
                    <h4>QUICK LINK</h4>
                    <a href="https://maps.app.goo.gl/A1VpfBTSutvgNhrm9" target="_blank">Map</a>
                    <p><a href="${basePath}faq/index.html">FAQ</a></p>
                    <p><a href="${basePath}policy-privacy/index.html">Policy Privacy</a></p>
                </div>
                <div>
                    <h4>RESERVATION</h4>
                    <p><a href="tel:+855011355534">+855(0)11 355 534</a></p>
                    <p><a href="mailto:bookings@sonitoriresort.com">bookings@sonitoriresort.com</a></p>
                </div>
                <div>
                    <h4>FOLLOW US</h4>
                    <div class="social-icons">
                        <a href="https://www.facebook.com/RambutanResort" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/rambutanphnompenh/" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.youtube.com/channel/UCrRnbks0gWe8GTaYuu7Ec4Q" target="_blank"><i class="fab fa-youtube"></i></a>
                        <a href="https://www.google.com/travel/search?q=rambutan%20phnom%20penh&g2lb=4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72560029%2C72573224%2C72616120%2C72619927%2C72628719%2C72647020%2C72648289%2C72686036%2C72760082%2C72803964%2C72808078%2C72825294%2C72827241%2C72832976%2C72852292%2C72880929%2C72882230%2C72885032%2C72894324%2C72895620%2C72903276&hl=en-KH&gl=kh&cs=1&ssta=1&ts=CAEaOAoYEhYKCC9tLzBkbHdqOgpQaG5vbSBQZW5oEhwSFAoHCOkPEAMYHxIHCOkPEAQYARgBMgQIABAAKgcKBToDS0hS&qs=CAEyJkNoZ0kwTV9BcUx5em1iMEZHZ3d2Wnk4eE1qUnpjWGxqTVhjUUFROARCCRFPysEsWX26sUIJESvnhVcJ7BBRSABaQTI_qgE8EAEyHxABIhu5kQRKGJHzIYCAsFbNkOc2s_YQTWeaT6mp4JcyFxACIhNyYW1idXRhbiBwaG5vbSBwZW5o&ap=KigKEgkZbQJs5wQlQBEestwtROZZQBISCUgKqEGswCxAER6y3C2ES1pAMABoAboBB3Jldmlld3M&ictx=111&ved=0CAAQ5JsGahcKEwjIo7CP0LqTAxUAAAAAHQAAAAAQCA" target="_blank"><i class="fab fa-google"></i></a>
                        <a href="https://www.tripadvisor.com/Hotel_Review-g293940-d4039341-Reviews-Rambutan_Resort_Phnom_Penh-Phnom_Penh.html" target="_blank"><img src="${basePath}images/tripadvisor-logo.webp" alt="Tripadvisor" width="25px"></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="payment-icons">
                    <span>Pay way :</span>
                    <img src="${basePath}images/visa-card.webp" alt="visa">
                    <img src="${basePath}images/master.webp" alt="mastercard">
                </div>
                <div>Copyright © Sonitori ${new Date().getFullYear()}</div>
            </div>
        </footer>
    `;

    // Function to add footer styles if they don't exist
    const addFooterStyles = () => {
        if (!document.getElementById('footer-styles')) {
            const style = document.createElement('style');
            style.id = 'footer-styles';
            style.textContent = `
                .footer {
                    background: #1f2a2e;
                    color: #ddd;
                    padding: 3rem 5% 5rem;
                    margin-top: 2rem;
                }

                .footer-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                    margin-bottom: 2rem;
                    max-width: 1300px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .footer-logo img {
                    max-width: 200px;
                    height: auto;
                    margin-bottom: 1rem;
                }

                .footer h4 {
                    color: #fff;
                    font-weight: 400;
                    margin-bottom: 1rem;
                    letter-spacing: 1px;
                }

                .footer a {
                    color: #ccc;
                    text-decoration: none;
                    display: block;
                    margin-bottom: 0.5rem;
                    font-size: 0.95rem;
                    transition: color 0.2s;
                }

                .footer a:hover {
                    color: #097684;
                }

                .social-icons {
                    display: flex;
                    gap: 1rem;
                    margin-top: 0.5rem;
                    flex-wrap: wrap;
                }

                .social-icons a {
                    background: rgba(255,255,255,0.1);
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 1.2rem;
                    transition: 0.2s;
                    margin-bottom: 0;
                }

                .social-icons a:hover {
                    background: #097684;
                    transform: translateY(-3px);
                    color: white;
                }

                .footer-bottom {
                    max-width: 1300px;
                    margin: 2rem auto 0;
                    padding-top: 1.5rem;
                    border-top: 1px solid #3a4549;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    align-items: center;
                    gap: 1rem;
                    font-size: 0.9rem;
                    color: #9a9187;
                }

                .payment-icons {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                }

                .payment-icons img {
                    height: 28px;
                }

                @media (max-width: 600px) {
                    .footer-bottom {
                        flex-direction: column;
                        text-align: center;
                    }
                }

                @media (max-width: 350px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                        text-align: center;
                    }
                    
                    .social-icons {
                        justify-content: center;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    };

    // Insert footer into the page
    const insertFooter = () => {
        // Check if footer already exists
        if (document.querySelector('.footer')) {
            return;
        }
        
        addFooterStyles();
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    };

    // Execute when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insertFooter);
    } else {
        insertFooter();
    }
})();