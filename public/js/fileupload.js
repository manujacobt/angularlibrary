FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
  )
  
  FilePond.setOptions({
    stylePanelAspectRatio: 20 / 20,
    imageResizeTargetWidth: 50,
    imageResizeTargetHeight: 50
  })
  
  FilePond.parse(document.body);