import Link from "next/link";
import s from "./PostCard.module.scss";

function PostCard({ title, mainImage, slug }) {
  return (
    <Link href={`/blog/${slug.current}`} className="card">
      <div>
        <img className={s.img} src={''} />
      </div>
      <div>
        <h3>{title}</h3>
      </div>
    </Link>
  );
}

export default PostCard;
