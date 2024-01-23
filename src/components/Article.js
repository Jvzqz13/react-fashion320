import imgOne from '../images/blog-image-1.jpg'
import imgTwo from '../images/blog-image-2.jpg'

function Article () {
    return (
        <article>
            <article class="blog">
                <h3>11/12/20</h3>
                <h2> On the Street in Booklyn </h2>
                <img src={imgOne} alt="blog1" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, dolorem consectetur nulla assumenda tenetur tempore beatae explicabo officia eos ex officiis dolore dicta reprehenderit, quis porro ut repellendus dolorum libero?
                    Reprehenderit quam voluptatum dolor facere laborum distinctio delectus obcaecati consectetur perferendis. Temporibus ipsum laudantium porro excepturi cum quia asperiores, ipsam pariatur eum, omnis, quasi expedita! Aliquam, quos. Provident, rerum non!
                    Hic vitae, possimus facilis facere commodi minus exercitationem doloribus, quis quaerat autem nesciunt impedit amet odio corrupti numquam. Placeat repudiandae vel in explicabo. Laudantium atque non officiis necessitatibus maiores error.
                    Quae consectetur impedit nostrum odio, dolorem reiciendis neque tempore soluta mollitia aspernatur, voluptas natus similique delectus suscipit sunt velit totam cumque, sint eius vitae beatae? Fuga laboriosam ducimus delectus repellat.
                    Veritatis doloremque et facilis repudiandae aliquid sint ratione deleniti totam, laborum nihil. Doloribus voluptate, impedit velit modi nemo tempora quam hic temporibus error consectetur porro saepe debitis nesciunt labore quidem.
                </p>
                <a href="button"> Continues... </a>

            </article>
            <article class="blog">
                <h3>11/11/20</h3>
                <h2> Vintage in Vogue </h2>
                <img src={imgTwo} alt="blog2" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, dolorem consectetur nulla assumenda tenetur tempore beatae explicabo officia eos ex officiis dolore dicta reprehenderit, quis porro ut repellendus dolorum libero?
                    Reprehenderit quam voluptatum dolor facere laborum distinctio delectus obcaecati consectetur perferendis. Temporibus ipsum laudantium porro excepturi cum quia asperiores, ipsam pariatur eum, omnis, quasi expedita! Aliquam, quos. Provident, rerum non!
                    Hic vitae, possimus facilis facere commodi minus exercitationem doloribus, quis quaerat autem nesciunt impedit amet odio corrupti numquam. Placeat repudiandae vel in explicabo. Laudantium atque non officiis necessitatibus maiores error.
                    Quae consectetur impedit nostrum odio, dolorem reiciendis neque tempore soluta mollitia aspernatur, voluptas natus similique delectus suscipit sunt velit totam cumque, sint eius vitae beatae? Fuga laboriosam ducimus delectus repellat.
                    Veritatis doloremque et facilis repudiandae aliquid sint ratione deleniti totam, laborum nihil. Doloribus voluptate, impedit velit modi nemo tempora quam hic temporibus error consectetur porro saepe debitis nesciunt labore quidem.
                </p>
                <a href="button"> Continues... </a>

            </article>
        </article>
    )
}

export default Article;