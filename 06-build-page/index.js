const path = require('path');
const {
  rm,
  mkdir,
  readdir,
  readFile,
  writeFile,
  copyFile,
} = require('fs/promises');

const projectFolder = path.join(__dirname, 'project-dist');
const currentAssetsPath = path.join(__dirname, 'assets');
const newAssetsPath = path.join(projectFolder, 'assets');

const buildLayout = async () => {
  let index = await readFile(path.join(__dirname, 'template.html'), 'utf8');
  const componentsPath = path.join(__dirname, 'components');

  try {
    const tags = await readdir(componentsPath, { withFileTypes: true });
    tags.forEach(async tag => {
      const filePath = path.join(componentsPath, tag.name);
      const componentData = await readFile(filePath, 'utf8');
      const extension = tag.name.split('.')[1];
      const template = `{{${tag.name.split('.')[0]}}}`;

      if (index.includes(template) && extension === 'html') {
        index = index.replace(template, componentData);
        await writeFile((path.join(__dirname, 'project-dist', 'index.html')), index);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const bundleStyles = async () => {
  const stylesFolderPath = path.join(__dirname, 'styles');
  const stylesFilePath = path.join(__dirname, 'project-dist', 'style.css');

  try {
    const bundle = [];
    const files = await readdir(stylesFolderPath, { withFileTypes: true });

    for (let file of files) {
      const filePath = path.join(stylesFolderPath, file.name);
      const extension = path.extname(file.name).slice(1);

      if (extension === 'css') {
        const fileData = await readFile(filePath, 'utf8');
        bundle.push(`${fileData}\n`);
      }
    }

    await writeFile(stylesFilePath, bundle);
  } catch (error) {
    console.error(error);
  }
};

const copyDir = async (input, output) => {
  try {
    await rm(output, { recursive: true, force: true });
    await mkdir(output);

    const files = await readdir(input, { withFileTypes: true });
    files.forEach(file => {
      file.isFile()
        ? copyFile(path.join(input, file.name), path.join(output, file.name))
        : copyDir(path.join(input, file.name), path.join(output, file.name));
    });
  } catch (error) {
    console.error(error);
  }
};

const buildProject = async () => {
  await rm(projectFolder, { recursive: true, force: true });
  await mkdir(projectFolder);
  buildLayout();
  bundleStyles();
  copyDir(currentAssetsPath, newAssetsPath);
};

buildProject();