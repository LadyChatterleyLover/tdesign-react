import React, { useState } from 'react';

import { Select } from 'tdesign-react';

const RemoteSearchSelect = () => {
  const defaultOptions = [];
  const [value, setValue] = useState();

  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([
    {
      value: `test1`,
      label: `Test1`,
    },
    {
      value: `test2`,
      label: `Test2`,
    },
    {
      value: `test3`,
      label: `Test3`,
    },
  ]);

  const onChange = (value) => {
    setValue(value);
  };

  const handleRemoteSearch = (search) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      let options = [];
      if (search) {
        options = [
          {
            value: `腾讯_test1`,
            label: `腾讯_test1`,
          },
          {
            value: `腾讯_test2`,
            label: `腾讯_test2`,
          },
          {
            value: `腾讯_test3`,
            label: `腾讯_test3`,
          },
        ];
      } else {
        options = defaultOptions;
      }

      setOptions(options);
    }, 1000);
  };

  return (
    <Select
      filterable
      value={value}
      onChange={onChange}
      style={{ width: '40%' }}
      loading={loading}
      onSearch={handleRemoteSearch}
      options={options}
    />
  );
};

export default RemoteSearchSelect;
