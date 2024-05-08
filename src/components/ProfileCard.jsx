import "bulma/css/bulma.css";
// import "bulma/css/versions/bulma-no-dark-mode.min.css";



function ProfileCard({ title, handle, imageSrc, description }) {




    return (<div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img
                    src={imageSrc}
                    alt="pda-logo"
                />
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">{title}</p>
                    <p class="subtitle is-6">{handle}</p>
                </div>
            </div>

            <div class="content">{description}</div>
        </div>
    </div>
    );
}

export default ProfileCard;