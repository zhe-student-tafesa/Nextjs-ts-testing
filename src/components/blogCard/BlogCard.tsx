import React from "react";
import styles from "./blogCard.module.css";
import Image from "next/image";
import Link from "next/link";

type Post={
  id: number,
  img?:string,
  title: string,
  createdAt: Date,
  body: string,
  slug: string,
}

interface Props{
    post: Post
}

const BlogCard = ({ post }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
            {/* add alt, so can pass test */}
          <Image
            className={styles.img}
            alt="post image"
            src={post.img ? post.img : "https://staging.miningskills.com.au/wp-content/uploads/2024/05/Post-6.jpg"}
            fill
          />
        </div>
        {/* use toISOString */}
        <span className={styles.date}>{post.createdAt.toISOString().slice(0, 10).replaceAll('-', '.')}</span>
      </div>
      <div className={styles.bottom}>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.desc}>{post.body}</p>
        <Link href={`/blog/${post.slug}`} className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;