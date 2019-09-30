export const fixtures = {
  rect: `<html>
    <head>
        <style>
            .test {
                position: absolute;
                left: 8px;
                top: 10px;
                width: 100px;
                height: 100px;
                border: 2px solid blue;
                margin: 3px;
                padding: 4px;
                background: coral;
            }
        </style>
    </head>
    <body>
    <div class="test"></div>
    </body>
    </html>`,
  'rect-scroll': `<html>
    <head>
        <style>
            .test {
                position: absolute;
                left: 2000px;
                top: 2000px;
                width: 100px;
                height: 100px;
                background: coral;
            }
        </style>
      </head>
    <body>
    <div class="test"></div>
    </body>
    </html>`,
  simple: `<html>
    <body>
    This is some simple HTML
    <div style="width: 100px; height: 100px; border: 1px solid blue; background: coral"></div>
    </body>
    </html>`
};
