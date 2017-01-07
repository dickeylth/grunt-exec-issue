# grunt-exec color issue demo project

## issue detail

When run `npm outdated` task from `grunt-exec`, color is disabled as shown blow:

### using `require('child_process').execSync`:

![](https://zos.alipayobjects.com/rmsportal/WGlKiQHpLBWAAGIebFiK.png)

### using `grunt-exec` command:

![](https://zos.alipayobjects.com/rmsportal/ngDoxPrePDLbNmoSiOom.png)

Compare the two images above and you'll find that the color is missing when using `grunt-exec` command.
