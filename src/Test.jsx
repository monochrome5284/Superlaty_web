import * as React from 'react';
import Box from '@mui/material/Box';
import {
  DataGridPremium,
  GridToolbar,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from '@mui/x-data-grid-premium';
import { useDemoData } from '@mui/x-data-grid-generator';
// free trial
// JavaScript KeyGen, designed to be put in an app and run on load.
import { md5 } from '@mui/x-license-pro/encoding/md5';
import { LicenseInfo } from '@mui/x-license-pro';
import { LICENSE_SCOPES } from '@mui/x-license-pro/utils/licenseScope';
import { LICENSING_MODELS } from '@mui/x-license-pro/utils/licensingModel';

let orderNumber = '';
let expiryTimestamp = Date.now(); // Expiry is based on when the package was created, ignored if perpetual license
let scope = LICENSE_SCOPES[1]; // 'pro' or 'premium'
let licensingModel = LICENSING_MODELS[0]; // 'perpetual', 'subscription'
let licenseInfo = `O=${orderNumber},E=${expiryTimestamp},S=${scope},LM=${licensingModel},KV=2`;
LicenseInfo.setLicenseKey(md5(btoa(licenseInfo)) + btoa(licenseInfo));
// import { LicenseInfo } from '@mui/x-license';

// LicenseInfo.setLicenseKey('');
const visibleFields = [
  'commodity',
  'quantity',
  'filledQuantity',
  'status',
  'isFilled',
  'unitPrice',
  'unitPriceCurrency',
  'subTotal',
  'feeRate',
  'feeAmount',
  'incoTerm',
];

export default function Test() {
  const { data, loading } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    editable: true,
    visibleFields,
  });
  const apiRef = useGridApiRef();

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      ...data.initialState,
      rowGrouping: {
        ...data.initialState?.rowGrouping,
        model: ['commodity'],
      },
      sorting: {
        sortModel: [{ field: '__row_group_by_columns_group__', sort: 'asc' }],
      },
      aggregation: {
        model: {
          quantity: 'sum',
        },
      },
    },
  });

  return (
    <Box sx={{ height: 520, width: '100%' }}>
      <DataGridPremium
        {...data}
        apiRef={apiRef}
        loading={loading}
        disableRowSelectionOnClick
        initialState={initialState}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}