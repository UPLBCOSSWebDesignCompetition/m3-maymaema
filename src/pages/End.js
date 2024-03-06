import React, { useEffect } from 'react';
import '../style/end.css'

const GOTO_LIST = [
    "#sdg1", "#sdg1", "#sdg1", "#sdg1",
    "#sdg5", "#sdg5", "#sdg5",
    "#sdg8", "#sdg8",
    "#sdg10",
    "#sdg8",
    "#sdg5",
    "#sdg13", "#sdg14", "#sdg15",
    "#sdg1",
    "#sdg17"
];

const End = ({ content }) => {
    // Get all elements with the class "row-display"
    const elements = document.querySelectorAll('.row-display');

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            })
        })

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach(element => observer.observe(element));
    });

    return (
        <>
            <section id="sdg18">

                <section className="row-display row1">
                    {content.slice(0, 5).map((item, index) => (
                        <a key={index} href={GOTO_LIST[index]} className="hidden circle-icon two-shadows-2">
                            <img src={item.imgsrc} alt={`icon${index + 1}`} />
                        </a>
                    ))}
                </section>

                <section className="row-display row2">
                    {content.slice(5, 11).map((item, index) => (
                        <a key={index} href={GOTO_LIST[index + 5]} className="hidden circle-icon two-shadows-2">
                            <img src={item.imgsrc} alt={`icon${index + 7}`} />
                        </a>
                    ))}
                </section>

                <section className="row-display row3">
                    {content.slice(11, 17).map((item, index) => (
                        <a key={index} href={GOTO_LIST[index + 11]} className="hidden circle-icon two-shadows-2">
                            <img src={item.imgsrc} alt={`icon${index + 11}`} />
                        </a>
                    ))}
                </section>

                <footer>
                    <p className="gradient-title end-text end-text-title"> <b>BE PART OF THE WORLD’S BEST PLAN</b></p>
                    <p className='end-text'>The full benefits of science as a public good should be harnessed for the SDGs. </p>
                    <p className='end-text'> cc 2024 | Not for commercial use.</p>
                </footer>

            </section>
        </>
    )
}

export default End;
