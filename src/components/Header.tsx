function Header() {
	return (
		<header>
            <p>Hey, I'm</p>
            <h1 className="portfolio-name-header">Dayne Dellaire</h1>
            <p className="small-bottom-margin">
                I'm a software engineer based in Toronto, Canada and also a
                communication and journalism student. I enjoy creating things
                that live on the internet, whether that be websites,
                applications, or anything in between. I have been freelancing
                for a year now while studying at the university and I've manage
                to gain a decent amount of experience and valuable knowledge
                from all different kinds of fields throughout my projects/work.
            </p>
            <div className="say-hi-container">
                <p className="big-text">Say hi</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="6" viewBox="0 0 34 6" fill="none">
                    <path d="M33.2121 3.21213C33.3293 3.09497 33.3293 2.90503 33.2121 2.78787L31.3029 0.87868C31.1858 0.761522 30.9958 0.761522 30.8787 0.87868C30.7615 0.995837 30.7615 1.18579 30.8787 1.30294L32.5757 3L30.8787 4.69706C30.7615 4.81421 30.7615 5.00416 30.8787 5.12132C30.9958 5.23848 31.1858 5.23848 31.3029 5.12132L33.2121 3.21213ZM0 3.3H33V2.7H0V3.3Z" fill="white"/>
                </svg>
            </div>
		</header>
	);
}

export default Header;
