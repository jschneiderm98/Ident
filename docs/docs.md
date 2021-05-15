# Documentation

## Description

  This documentation was build using mkdocs, with material theme. It is automatically updated based on the main branch of the project using github action, the workflow can be found in `.github/workflows/docs_ci.yml`

## Usage

  Add the documentation to docs folder, using markdown. Then update the `nav` section the `mkdocs.yml` with the name of the document, and the path to the markdown file, the path is relative do the docs folder.

## Testing

  To test the documentation locally run:
  
  * If it is the first time testing locally in this computer
  
    ```
    make build
    ```

  * Then:
  
    ```
    make run
    ```