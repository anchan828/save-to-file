# anchan828/save-to-file

## Description

Save text as file.

## Usage

```
uses: anchan828/save-to-file@v1
with:
  text: 'test'
  file: 'path/to/file'
```

if text encoded base64, 

```
uses: anchan828/save-to-file@v1
with:
  text: 'test'
  file: 'path/to/file'
  encoding: 'base64'
```