window.config = {
  routerBasename: "/",
  extensions: [],
  modes: [],
  customizationService: {},
  showStudyList: true,
  maxNumberOfWebWorkers: 3,
  showWarningMessageForCrossOrigin: true,
  showCPUFallbackMessage: true,
  showLoadingIndicator: true,
  strictZSpacingForVolumeViewport: true,
  maxNumRequests: {
    interaction: 100,
    thumbnail: 75,
    prefetch: 25,
  },
  // filterQueryParam: false,
  defaultDataSourceName: "dicomweb",
  dataSources: [
    {
      friendlyName: "pacs",
      namespace: "@ohif/extension-default.dataSourcesModule.dicomweb",
      sourceName: "dicomweb",
      configuration: {
        name: "pacs",
        wadoUriRoot: "/orthanc/wado",
        qidoRoot: "/orthanc/dicom-web",
        wadoRoot: "/orthanc/dicom-web",
        qidoSupportsIncludeField: true,
        supportsReject: true,
        imageRendering: "wadors",
        thumbnailRendering: "wadors",
        enableStudyLazyLoad: true,
        useBulkDataURI: false,
        supportsFuzzyMatching: true,
        supportsWildcard: true,
        dicomUploadEnabled: true, // Set to true to enable DICOM upload
        singlepart: "bulkdata,video,pdf",
      },
    },
    // {
    //   namespace: "@ohif/extension-default.dataSourcesModule.dicomjson",
    //   sourceName: "dicomjson",
    //   configuration: {
    //     friendlyName: "dicom json",
    //     name: "json",
    //   },
    // },
  ],
  httpErrorHandler: (error) => {
    console.warn(error.status);

    console.warn("test, navigate to https://ohif.org/");
  },
  whiteLabeling: {
    createLogoComponentFn: function (React) {
      return React.createElement(
        "a",
        {
          target: "_self",
          rel: "noopener noreferrer",
          className: "header-brand",
          href: "/",
        },
        React.createElement("img", {
          src: "./logo.png",
          style: {
            display: "block",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: "200px",
          },
        }),
      );
    },
  },
  hotkeys: [
    {
      commandName: "incrementActiveViewport",
      label: "Next Viewport",
      keys: ["right"],
    },
    {
      commandName: "decrementActiveViewport",
      label: "Previous Viewport",
      keys: ["left"],
    },
    { commandName: "rotateViewportCW", label: "Rotate Right", keys: ["r"] },
    { commandName: "rotateViewportCCW", label: "Rotate Left", keys: ["l"] },
    { commandName: "invertViewport", label: "Invert", keys: ["i"] },
    {
      commandName: "flipViewportHorizontal",
      label: "Flip Horizontally",
      keys: ["h"],
    },
    {
      commandName: "flipViewportVertical",
      label: "Flip Vertically",
      keys: ["v"],
    },
    { commandName: "scaleUpViewport", label: "Zoom In", keys: ["+"] },
    { commandName: "scaleDownViewport", label: "Zoom Out", keys: ["-"] },
    { commandName: "fitViewportToWindow", label: "Zoom to Fit", keys: ["="] },
    { commandName: "resetViewport", label: "Reset", keys: ["space"] },
    { commandName: "nextImage", label: "Next Image", keys: ["down"] },
    { commandName: "previousImage", label: "Previous Image", keys: ["up"] },
    {
      commandName: "setToolActive",
      commandOptions: { toolName: "Zoom" },
      label: "Zoom",
      keys: ["z"],
    },
    // ~ Window level presets
    {
      commandName: "windowLevelPreset1",
      label: "W/L Preset 1",
      keys: ["1"],
    },
    {
      commandName: "windowLevelPreset2",
      label: "W/L Preset 2",
      keys: ["2"],
    },
    {
      commandName: "windowLevelPreset3",
      label: "W/L Preset 3",
      keys: ["3"],
    },
    {
      commandName: "windowLevelPreset4",
      label: "W/L Preset 4",
      keys: ["4"],
    },
    {
      commandName: "windowLevelPreset5",
      label: "W/L Preset 5",
      keys: ["5"],
    },
    {
      commandName: "windowLevelPreset6",
      label: "W/L Preset 6",
      keys: ["6"],
    },
    {
      commandName: "windowLevelPreset7",
      label: "W/L Preset 7",
      keys: ["7"],
    },
    {
      commandName: "windowLevelPreset8",
      label: "W/L Preset 8",
      keys: ["8"],
    },
    {
      commandName: "windowLevelPreset9",
      label: "W/L Preset 9",
      keys: ["9"],
    },
  ],
};
