function JobPosting({url, by, time, title}) {
  const formattedTime = new Date(time * 1000).toLocaleString();

  return (
    <div className="custom-post" role="listitem">
      <h2 className="custom-post__title">
        <a
          className={url ? "" : "inactiveLink"}
          href={url}
          target="_blank"
          rel="noopener" // security for opening new pages - Explain this indepth
        >
          {title}
        </a>
      </h2>
      <span className="custom-post__metadata">
        By {by} · {formattedTime}
      </span>
    </div>
  );
}

export default JobPosting;
