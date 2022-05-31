import tintuc from '../news-data';


const News = {
    render: () =>
        `<div>
        ${tintuc.map((tin) => {
            `
            <div>
            ${tin.content}
            </div>
            `
        })}
        
        </div>`
}
export default News;