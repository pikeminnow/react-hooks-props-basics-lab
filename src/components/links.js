import React from "react"

function Links(props) {
    const gitHub = props.github;
    const linkedIn = props.linkedin;
    return (<div id="links">
        <h3>Links</h3>
        <a href={gitHub}>{gitHub}</a>
        <a href={linkedIn}>{linkedIn}</a>
    </div>
    );
}

export default Links;
