# [SystemJS](https://github.com/systemjs/systemjs)

```html
<script src="system.js"></script>

<script>
System.transpiler = 'babel';
</script>

<script>
System.config({
  paths: {
    traceur: 'path/to/traceur.js'
  }
});
</script>

<script>
System.import('./app');
</script>
```
