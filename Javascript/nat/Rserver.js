const RSS_URL = `../feed`;

console.log($.ajax(RSS_URL, {
  accepts: {
    xml: "application/rss+xml"
  },

  dataType: "xml",

  success: function(data) {
    $(data)
      .find("item")
      .each(function() {
        const el = $(this);

        const template = `
          <article>
            <img src="${el.find("image").url()alt="">
            <h2>
              <a href="${el
                .find("link")
                .text()}" target="_blank" rel="noopener">
                ${el.find("title").text()}
              </a>
            </h2>
			<p>
                ${el.find("description").text()}
			</p>
          </article>
        `;

        document.body.insertAdjacentHTML("beforeend", template);
      });
  }
})); 