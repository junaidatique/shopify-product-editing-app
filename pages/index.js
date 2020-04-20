import { Layout, Page, EmptyState } from '@shopify/polaris';
const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';


class Index extends React.Component {
  state = { open: false };
  render() {
    return (
      <Page>
        <TitleBar
          primaryAction={{
            content: 'Select products',
            onAction: () => this.setState({ open: true }),
          }}
        />
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
        <Layout>
          <EmptyState
            heading="Select your products for updating"
            action={{
              content: 'Select products',
              onAction: () => this.setState({ open: true }),
            }}
            image={img}
          >
            <p>Select products to change their details. </p>
          </EmptyState>
        </Layout>
      </Page>
    )
  }
  handleSelection = (resources) => {
    this.setState({ open: false })
    const idsFromResources = resources.selection.map((product) => product.id);
    console.log(idsFromResources)
  };
};

export default Index;