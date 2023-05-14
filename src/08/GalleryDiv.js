import style from './Gallery.module.css';
const GalleryDiv = ({ dt }) => {
    let infos = [];


    for (let info of dt) {

        let footerDt = info.galSearchKeyword;

        let hashTags = footerDt.split(',');
        //        hashTags = hashTags.map((info) => <span>info.split(' ')</span>);
        hashTags = hashTags.map((info, idx) =>
            <span key={info.galCreatedtime + '-' + idx} className={style.sp1}>
                {/* <span key={info.galModifiedtime + '-' + idx} id={style.sp2}> # </span>  */}
                # {info}
            </span>
        );

        // hashTags = hashTags.map((i) => <span className='sp1'>{}</span>)
        infos.push(
            <article key={info.galContentId}>
                <header>
                    <div className='grid'>
                    <span className={style.infosp1}>{info.galTitle}</span>
                    <span className={style.infosp2}> {info.galPhotographyLocation}</span>
                    </div>
                </header>
                <div>
                    <img src={info.galWebImageUrl}>
                    </img>
                </div>
                {/* <footer className={style.container} id={style.ft}> */}
                <footer >
                    <div className={style.spd}>

                    {hashTags}
                    </div>
                </footer>
            </article>
        );

    }
    return (
        <>
            {infos}
        </>
    );
}

export default GalleryDiv;