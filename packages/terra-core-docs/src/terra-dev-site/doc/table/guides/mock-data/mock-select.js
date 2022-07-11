const mockData = [
  {
    key: 'unique-0',
    toggleText: 'Toggle Power Row 0',
    discloseText: 'Power Row 0 - Details',
    primaryIndex: 1,
    cells: [
      {
        key: 'unique-0-0',
        title: 'Dave Smith',
      },
      {
        key: 'unique-0-1',
        title: '123 Adams Drive',
      },
      {
        key: 'unique-0-2',
        title: '123-456-7890',
      },
      {
        key: 'unique-0-3',
        title: 'dave.smith@gmail.com',
      },
    ],
  },
  {
    key: 'unique-1',
    toggleText: 'Toggle Power Row 1',
    discloseText: 'Power Row 1 - Details',
    primaryIndex: 1,
    parentRow: 'unique-0',
    cells: [
      {
        key: 'unique-1-0',
        title: 'Michael Smith',
      },
      {
        key: 'unique-1-1',
        title: '345 Raymond Road',
      },
      {
        key: 'unique-1-2',
        title: '111-222-3333',
      },
      {
        key: 'unique-1-3',
        title: 'michael.smith@gmail.com',
      },
    ],
  },
  {
    key: 'unique-2',
    toggleText: 'Toggle Power Row 2',
    discloseText: 'Power Row 2 - Details',
    primaryIndex: 1,
    parentRow: 'unique-1',
    cells: [
      {
        key: 'unique-2-0',
        title: 'Jack Smith',
      },
      {
        key: 'unique-2-1',
        title: '567 Drive Street',
      },
      {
        key: 'unique-2-2',
        title: '222-333-4444',
      },
      {
        key: 'unique-2-3',
        title: 'jack.smith@gmail.com',
      },
    ],
  },
  {
    key: 'unique-3',
    toggleText: 'Toggle Power Row 3',
    discloseText: 'Power Row 3 - Details',
    primaryIndex: 1,
    parentRow: 'unique-0',
    cells: [
      {
        key: 'unique-3-0',
        title: 'Tom Smith',
      },
      {
        key: 'unique-3-1',
        title: '789 Bay Road',
      },
      {
        key: 'unique-3-2',
        title: '555-666-7777',
      },
      {
        key: 'unique-3-3',
        title: 'tom.smith@gmail.com',
      },
    ],
  },
  {
    key: 'unique-4',
    toggleText: 'Toggle Power Row 4',
    discloseText: 'Power Row 4 - Details',
    primaryIndex: 1,
    cells: [
      {
        key: 'unique-4-0',
        title: 'Paul Smith',
      },
      {
        key: 'unique-4-1',
        title: '123 Adams Drive',
      },
      {
        key: 'unique-4-2',
        title: '777-888-9999',
      },
      {
        key: 'unique-4-3',
        title: 'paul.smith@gmail.com',
      },
    ],
  },
];

export default mockData;
