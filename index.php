<?php
$isServerRenderingEnabled = true;
$markup = '';
if ($isServerRenderingEnabled) {
    require_once dirname(__FILE__) . '/vendor/autoload.php';

    function getMarkup($component, $props) {
      $default_prop = json_encode($props);
      $v8 = new V8Js();
      $js[] = "var global = global || this, self = self || this, window = window || this;";
      $js[] = file_get_contents('./front/dist/bundle.js', true);
      $js[] = "print(ReactDomServer.renderToString(React.createElement(${component}, ${default_prop})));";
      $code = implode(";\n", $js);
      ob_start();
      $v8->executeString($code);
      return ob_get_clean();
    }

    $component = 'App';
    $props = [];
    $markup = getMarkup($component, $props);
}
?>

<!DOCTYPE html>
<html>
  <head>
    <title>SSSR Simple</title>
  </head>
  <body>
    <div id="app"><?php echo $markup;?></div>
    <script src="front/dist/bundle.js"></script>

    <script>
        document.onreadystatechange = function () {
          if (document.readyState === 'complete') {
            ReactDom.render(
              React.createElement(App, {}),
              document.getElementById('app')
            );
          }
        }
    </script>
  </body>
</html>
