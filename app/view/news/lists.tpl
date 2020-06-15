<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <ul class="news-view view">
      {% for item in results %}
      {% for itm in item.weather_data %}
      <li>  
        {{ itm.weather }}
      </li>
      {% endfor %}
      {% endfor %}
    </ul>
  </body>
</html>