import { promises as fs } from 'fs';

export async function GET(request: Request) {

    // GRAPHICS DESIGN
    const figmaFile = await fs.readFile(process.cwd() + '/json/graphics_design/figma.json', 'utf8');
    const figmaData = JSON.parse(figmaFile);

    const adobePhotoshop = await fs.readFile(process.cwd() + '/json/graphics_design/adobe_photoshop.json', 'utf8');
    const adobePhotoshopData = JSON.parse(adobePhotoshop);

    const adobeIllustrator = await fs.readFile(process.cwd() + '/json/graphics_design/adobe_illustrator.json', 'utf8');
    const adobeIllustratorData = JSON.parse(adobeIllustrator);

    const corelDRAW = await fs.readFile(process.cwd() + '/json/graphics_design/corel_draw.json', 'utf8');
    const corelDRAWData = JSON.parse(corelDRAW);

    const sketch = await fs.readFile(process.cwd() + '/json/graphics_design/sketch.json', 'utf8');
    const sketchData = JSON.parse(sketch);

    // FRONTEND
    const htmlFile = await fs.readFile(process.cwd() + '/json/frontend/html.json', 'utf8');
    const htmlData = JSON.parse(htmlFile);

    const cssFile = await fs.readFile(process.cwd() + '/json/frontend/css.json', 'utf8');
    const cssData = JSON.parse(cssFile);

    const javascriptFile = await fs.readFile(process.cwd() + '/json/frontend/javascript.json', 'utf8');
    const javascriptData = JSON.parse(javascriptFile);

    const reactFile = await fs.readFile(process.cwd() + '/json/frontend/react.json', 'utf8');
    const reactData = JSON.parse(reactFile);

    const next_js_File = await fs.readFile(process.cwd() + '/json/frontend/next_js.json', 'utf8');
    const next_js_Data = JSON.parse(next_js_File);

    const muiFile = await fs.readFile(process.cwd() + '/json/frontend/mui.json', 'utf8');
    const muiData = JSON.parse(muiFile);


    // BACKEND
    const djangoFile = await fs.readFile(process.cwd() + '/json/backend/django.json', 'utf8');
    const djangoData = JSON.parse(djangoFile);

    const postgresqlFile = await fs.readFile(process.cwd() + '/json/backend/postgresql.json', 'utf8');
    const postgresqlData = JSON.parse(postgresqlFile);

    const dockerFile = await fs.readFile(process.cwd() + '/json/backend/docker.json', 'utf8');
    const dockerData = JSON.parse(dockerFile);


    // FINAL
    const data = htmlData.concat(cssData, javascriptData, reactData, next_js_Data, muiData, djangoData, postgresqlData, dockerData, figmaData, adobePhotoshopData, adobeIllustratorData, corelDRAWData, sketchData);

    return Response.json(data);
}