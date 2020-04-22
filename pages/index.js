import React, { useState } from 'react'

import { Layout, Page, EmptyState } from '@shopify/polaris';
const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import Cookies from 'js-cookie';
import gql from 'graphql-tag';
import { useQuery } from "@apollo/react-hooks";
const QUERY = gql`
  query listStores($skip: Int, $userId: String) {
    listStores (skip: $skip, filter: { userId: $userId }) {
      stores {
        id
        title
        email
        userId
        partner
        createdAt            
        timezone
        paymentPlan
        shortLinkService
        uniqKey
        profiles {
          id
          name
          service
          serviceProfile
          avatarUrl
          profileURL
          uniqKey
          isConnected
          isSharePossible
          isTokenExpired
        }
      }
      totalRecords
    }
  }
`;
function Index() {
  const [open, setOpen] = useState(false);
  const shopURL = Cookies.get("shopOrigin");
  const listStoresResponse = useQuery(QUERY,
    {
      variables: { skip: 0, partnerSpecificUrl: shopURL },
      onCompleted(data) {
        console.log("onCompleted -> data", data)

      }
    }
  );
  console.log("Index -> listStoresResponse", listStoresResponse)



  console.log("Index -> shopURL", shopURL)
  const handleSelection = (resources) => {
    setOpen(false)
    const idsFromResources = resources.selection.map((product) => product.id);
    console.log(idsFromResources)
  };
  return (
    <Page>
      <TitleBar
        primaryAction={{
          content: 'Select products',
          onAction: () => setOpen(true),
        }}
      />
      <ResourcePicker
        resourceType="Product"
        showVariants={false}
        open={open}
        onSelection={(resources) => handleSelection(resources)}
        onCancel={() => setOpen(false)}
      />
      <Layout>
        <EmptyState
          heading="Select your products for updating"
          action={{
            content: 'Select products',
            onAction: () => setOpen(true),
          }}
          image={img}
        >
          <p>Select products to change their details. </p>
        </EmptyState>
      </Layout>
    </Page>
  )
}
;

export default Index;