import SectionHeader from "./SectionHeader";
import '../styles/navbar.css';

function Notes() {
    return (
        <div id="notes" className="notes hidden content-container">
            <SectionHeader number="04." title="NOTES" />
            <h3>Fixes</h3>
            <p>Navbar has some interesting behavior when colors swap from light to dark</p>
            <p>Navbar has some strange scrolling on mobile. Maybe a counter or threshold to scroll will fix it</p>
            <h3>Changes</h3>
            <p>I plan to continue this project and continue to build my portfolio but making things is <b>very difficult</b></p>
            <p>I hope to change the navbar when I have time and fix the tablet styling but other than that the webpage is complete!</p>
            <h3>Thank you!</h3>
            <p>This is still a work in progress build and I am always learning so if you have any feedback or any suggestions please contact me</p>
        </div>
    );
}

export default Notes