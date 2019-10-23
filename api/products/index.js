/**
 * queries
 */

/**
 * This should be used for product listing for single layout as well as for product detail
 * Will fetch products using benefitGraph field + will fetch benefitInfos
 * From this query client can compose benefitTree with naming coming from benefitInfos
 * BenefitGraph goes 3 layers down only
 */

const single = `
query single(
  $tenantId: String!
  $clientId: String!
  $where: productWhereInput
  $productTypes: [String]
  $values:[keyValueInput]
  $discountCodes: [String]

  $hasAdvisorId: Boolean = false
  ) {
  products: products_2(where:$where values:$values) {
    list {
      name
      productId{
        plan
        type
        version
      }
      pricing(values: $values discountCodes: $discountCodes){
        formattedPrice
        originalPrice
        formattedOriginalPrice
        appliedDiscounts {
          code
          originalPrice
          flat
          ratio
          formattedFlat
          formattedOriginalPrice
        }
        appliedTaxes {
          code
          name
          originalPrice
          flat
          ratio
          formattedFlat
          formattedOriginalPrice
        }
        amount
        currencyCode

        indicativePrices @include(if: $hasAdvisorId) {
          type
          amount
          formattedPrice
        }

      }
      insurer {
        name
        logoUrls{
          typeC
        }
      }
      majorExclusions
      importantNotes
      termsAndConditionsUrl
      applicationFormUrl
      enrollmentUrl
      brochureUrl
      premiumTableUrl
      benefitGraph {
        typeId
        value
        #TODO: 'name' should be removed name after refactoring of sinle product layout done
        # Single product layout component should accept prop benefitInfo so that it can compose the tree with naming
        name
        detailedValue
        isOptional
        options {
          name
          optionKey
          value
          typeId

          children {
            typeId
            value
            optionKey
            name
          }

        }
        children {
          typeId
          value
          detailedValue
          isOptional
          options{
            name
            optionKey
            value
            typeId
          }
          #TODO: 'name' should be removed name after refactoring of sinle product layout done
          # Single product layout component should accept prop benefitInfo so that it can compose the tree with naming
          name
          children {
            typeId
            value
            detailedValue
            isOptional
            options{
              name
              optionKey
              value
              typeId
            }
            #TODO: 'name' should be removed name after refactoring of sinle product layout done
            # Single product layout component should accept prop benefitInfo so that it can compose the tree with naming
            name
          }
        }
      }
    }
  }
  benefitInfos (tenantId: $tenantId clientId: $clientId productTypes: $productTypes){
    name
    description
    type
    typeId
  }
  benefitCategories(productTypes: $productTypes) {
    categories {
      name
      id
      description,
     	benefitTypeIds
    }
    productType
  }
}
`

/**
 * This should be used for product listing page where there is more products
 * Will fetch product with benefitGraph - only one layer
 */

const listing = `
query listing(
  $tenantId: String!
  $clientId: String!
  $where: productWhereInput
  $productTypes: [String]
  $values:[keyValueInput]
  $benefitTypeIds: [String]

  $productIds: productWhereInput
  $hasAdvisorId: Boolean = false
  $advisorId: String = ""
  ) {
  comparison: products_2 (
    where: $productIds
  ) {
    list {
      ...Product
    }
  }
  products: products_2 (
    where: $where
    values: $values
  ) {
    list {
      ...Product
    }
  }
  benefitInfos (tenantId: $tenantId clientId: $clientId productTypes: $productTypes){
    name
    type
    typeId
  }
  insurers (tenantId: $tenantId productTypes: $productTypes) {
    name
    detailedName
    id
  }
}

fragment Product on product {
    name
    productId {
      plan
      type
      version
    }

    ...Tags
    ...Scores
    ...Prices
    ...Benefits
    ...Insurer

    enrollmentUrl
}

fragment Tags on product {
  tags {
    id
    name
    type
    description
  }
}

fragment Insurer on product {
  insurer {
    name
    id
    logoUrls{
      typeC
    }
  }
}


fragment Benefits on product {
  benefits(typeIds: $benefitTypeIds) {
    parentTypeId
    rawData
    typeId
    value
    detailedValue
  }
}

fragment Scores on product {
  scores(advisorId: $advisorId values: $values) @include(if: $hasAdvisorId)  {
    id
    value
    name
  }
}

fragment Prices on product {
  pricing(values: $values) {
    formattedPrice
    originalPrice
    formattedOriginalPrice

    appliedDiscounts {
      code
      originalPrice
      flat
      ratio
      formattedFlat
      formattedOriginalPrice
    }
    appliedTaxes {
      code
      name
      originalPrice
      flat
      ratio
      formattedFlat
      formattedOriginalPrice
    }

    indicativePrices @include(if: $hasAdvisorId) {
      type
      amount
      formattedPrice
      formattedOriginalPrice
      appliedDiscounts {
        code
        originalPrice
        flat
        ratio
        formattedFlat
        formattedOriginalPrice
      }
      appliedTaxes {
        code
        name
        originalPrice
        flat
        ratio
        formattedFlat
        formattedOriginalPrice
      }
    }

    amount
    currencyCode
  }
}
`

const comparison = `
query comparison(
  $tenantId: String!
  $clientId: String!
  $where: productWhereInput
  $values: [keyValueInput]
  $productTypes: [String]
  $benefitTypeIds: [String]

  $hasAdvisorId: Boolean = false
  ) {
  products: products_2(where:$where values:$values) {
    list {
      ...Product
    }
  }

  benefitInfos (tenantId: $tenantId clientId: $clientId productTypes: $productTypes){
    name
    type
    typeId
    categories
    description
  }

  benefitCategories(productTypes: $productTypes) {
    categories {
      name
      id
      description
    }
    productType
  }
}

fragment Product on product {
  name
  productId {
    plan
    type
    version
  }
  enrollmentUrl
  insurer {
    name
    id
    logoUrls {
      typeC
    }
  }

  benefits(typeIds: $benefitTypeIds) {
    parentTypeId
    rawData
    typeId
    value
    detailedValue
  }

  ...Prices
}


fragment Prices on product {
  pricing(values: $values) {
    formattedPrice
    formattedOriginalPrice
    originalPrice

    appliedDiscounts {
      code
      ratio
      originalPrice
      formattedOriginalPrice
    }

    indicativePrices @include(if: $hasAdvisorId) {
      type
      amount
      formattedPrice
    }

    amount
    currencyCode
  }
}
`

const checkoutConfig = `
query checkout(
  $where: productWhereInput
  $values:[keyValueInput]
  $discountCodes: [String]
  $hasAdvisorId: Boolean = false
  ) {
  products_2(where:$where values:$values) {
    list {
      name
      productId{
        plan
        type
        version
      }
      pricing(values: $values discountCodes: $discountCodes){
        formattedPrice
        formattedOriginalPrice
        originalPrice
        appliedDiscounts {
          code
          originalPrice
          flat
          ratio
          formattedFlat
          formattedOriginalPrice
        }
        appliedTaxes {
          code
          name
          originalPrice
          flat
          ratio
          formattedFlat
          formattedOriginalPrice
        }
        amount
        currencyCode

        indicativePrices @include(if: $hasAdvisorId) {
          type
          amount
          formattedPrice
        }
      }
      benefitGraph {
        typeId
        value
        #TODO: 'name' should be removed name after refactoring of sinle product layout done
        # Single product layout component should accept prop benefitInfo so that it can compose the tree with naming
        name
        detailedValue
        isOptional
        options {
          name
          optionKey
          value
          typeId

          children {
            typeId
            value
            optionKey
            name
          }

        }
        children {
          typeId
          value
          detailedValue
          isOptional
          options{
            name
            optionKey
            value
            typeId
          }
          #TODO: 'name' should be removed name after refactoring of sinle product layout done
          # Single product layout component should accept prop benefitInfo so that it can compose the tree with naming
          name
          children {
            typeId
            value
            detailedValue
            isOptional
            options{
              name
              optionKey
              value
              typeId
            }
            #TODO: 'name' should be removed name after refactoring of sinle product layout done
            # Single product layout component should accept prop benefitInfo so that it can compose the tree with naming
            name
          }
        }
      }
      checkoutConfig {
        meta
        fields {
          actions {
            on
            payload
            targetId
            type
            values
          }
          autocomplete
          cssClass
          id
          mapTos {
            defaultValue
            key
            mapTo
          }
          options {
            name
            value
          }
          props
          text {
            headline
            subheadline
            placeholder
          }
          type
          validation
          initialValue
        }
        sections {
          fieldIds
          id
        }
      }
    }
  }
}
`

const initializeTransaction = `
mutation initPayment($paymentInput: initializeTransactionInput!) {
  initializeTransaction(input: $paymentInput) {
    errors,
    value {
      token
      url
    }
  }
}
`

export default {
  single,
  listing,
  comparison,
  checkoutConfig,
  initializeTransaction
}
