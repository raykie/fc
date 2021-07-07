export const NAS_HELP_INFO = [
  {
    header: 'Nas',
    content: 'Upload and download files for NAS service.',
  },
  {
    header: 'Usage',
    content: '$ s exec -- nas <sub-command>',
  },
  {
    header: 'SubCommand',
    content: [
      {
        desc: 'download',
        example: 'Download resources, you can get help through [s nas download -h]',
      },
      {
        desc: 'upload',
        example: 'Upload resources, you can get help through [s nas upload -h]',
      },
      {
        desc: 'command',
        example: 'Execute relevant instructions, you can get help through [s nas command -h]',
      },
    ],
  },
];

const UPLOADHELP = [
  {
    header: 'nas Upload',
    content: 'Upload resources.',
  },
  {
    header: 'Usage',
    content: [
      { example: '$ s nas upload <options> <src_path> <fc_dir>' },
    ],
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'recursive',
        description: 'Iterate to copy folder content',
        alias: 'r',
        defaultOption: false,
        type: Boolean,
      },
      {
        name: 'no-clobber',
        description: 'Do not override existing files',
        alias: 'n',
        defaultOption: false,
        type: Boolean,
      },
    ],
  },
  {
    header: 'Global Options',
    optionList: [
      {
        name: 'help',
        description: 'Upload help for command',
        alias: 'h',
        type: Boolean,
      },
    ],
  },
  {
    header: 'Examples with Yaml',
    content: [
      {
        example: '$ s exec -- nas upload /home/usr/demo.file nas://<fc_dir>',
      },
    ],
  },
  {
    header: 'Examples',
    content: [
      {
        example: '$ s exec -- upload /home/usr/demo.file nas://<fc_dir>',
      },
    ],
  },
];

const DOWNLOADHELP = [
  {
    header: 'Nas Download',
    content: 'Download resources.',
  },
  {
    header: 'Usage',
    content: [
      { example: '$ s nas download <options> <fc_dir> <src_path>' },
    ],
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'recursive',
        description: 'Iterate to copy folder content',
        alias: 'r',
        defaultOption: false,
        type: Boolean,
      },
      {
        name: 'no-clobber',
        description: 'Do not override existing files',
        alias: 'n',
        defaultOption: false,
        type: Boolean,
      },
    ],
  },
  {
    header: 'Global Options',
    optionList: [
      {
        name: 'help',
        description: 'Download help for command',
        alias: 'h',
        type: Boolean,
      },
    ],
  },
  {
    header: 'Examples with Yaml',
    content: [
      {
        example: '$ s exec -- nas download nas://<fc_dir> /home/usr/demo',
      },
    ],
  },
];

const COMMANDHELP = [
  {
    header: 'nas Command',
    content: 'Operation instruction.',
  },
  {
    header: 'Usage',
    content: [
      { example: '$ s exec -- nas command <option>' },
    ],
  },
  {
    header: 'Global Options',
    optionList: [
      {
        name: 'help',
        description: 'Download help for command',
        alias: 'h',
        type: Boolean,
      },
    ],
  },
  {
    header: 'Examples',
    content: [
      {
        example: '$ s exec -- nas command ls nas:///<nas_dir>',
      },
    ],
  },
];

export const NAS_SUB_COMMAND_HELP_INFO = {
  download: DOWNLOADHELP,
  upload: UPLOADHELP,
  command: COMMANDHELP,
  // fc 组件不推的几个指令，但是支持
  remove: [],
  deploy: [],
  ls: [],
  cp: [],
  rm: [],
};