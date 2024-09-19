import React, { useState } from 'react';
import {
  Box, Button, Flex, Heading, Table, Tbody, Td, Th, Thead, Tr, Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, useDisclosure, IconButton, Image
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

const Panel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); 
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    status: '',
    image: '',
    ean: '',
    qualityScore: '',
    liveOn: '',
    brand: '',
    productType: '',
    series: ''
  });
  const [editIndex, setEditIndex] = useState(null); 
  const [search, setSearch] = useState(''); 
  const [selectedProducts, setSelectedProducts] = useState(new Set()); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const addProduct = () => {
    if (editIndex !== null) {

      const updatedProducts = [...products];
      updatedProducts[editIndex] = newProduct;
      setProducts(updatedProducts);
    } else {

      setProducts([...products, newProduct]);
    }
    resetForm(); 
  };

  const editProduct = (index) => {
    setNewProduct(products[index]);
    setEditIndex(index);
    onOpen(); 
  };

  const deleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    selectedProducts.delete(index);
    setSelectedProducts(new Set([...selectedProducts]));
  };

  const deleteSelectedProducts = () => {
    const updatedProducts = products.filter((_, index) => !selectedProducts.has(index));
    setProducts(updatedProducts);
    setSelectedProducts(new Set()); 
  };

  const resetForm = () => {
    setNewProduct({
      status: '',
      image: '',
      ean: '',
      qualityScore: '',
      liveOn: '',
      brand: '',
      productType: '',
      series: ''
    });
    setEditIndex(null);
    onClose(); 
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCheckboxChange = (index) => {
    const newSelectedProducts = new Set(selectedProducts);
    if (newSelectedProducts.has(index)) {
      newSelectedProducts.delete(index);
    } else {
      newSelectedProducts.add(index);
    }
    setSelectedProducts(newSelectedProducts);
  };

  return (
    <Box paddingX={20} margin={4}>
      <Flex alignItems="center" marginBottom={5}>
        <Image src="https://cdn.prod.website-files.com/64b55bdff8e166207a05f415/64b55bdff8e166207a05f645_LOGO_SHOPVIBES.svg" alt="ShopVibes Logo" boxSize="100px" />
      </Flex>

      <Heading as="h1" size="lg" marginBottom={5}>View Your Products</Heading>
      <Heading as="h2" size="md" marginBottom={3}>Product Management</Heading>
      
      <Flex justify="flex-end" marginBottom={4}>
        <Input
          placeholder="Search by EAN"
          value={search}
          onChange={handleSearchChange}
          width="200px"
          marginRight={2}
        />
        <Button color="#1D3CDA" onClick={onOpen}>Add</Button>
      </Flex>


      <Flex justify="flex-start" marginBottom={4}>
        <Button colorScheme="red" onClick={deleteSelectedProducts} isDisabled={selectedProducts.size === 0}>
          Delete All
        </Button>
      </Flex>


      <Box border="1px" borderColor="gray.200" borderRadius="md" padding={4}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Select</Th> 
              <Th>Status</Th>
              <Th>Image</Th>
              <Th>EAN</Th>
              <Th>Quality Score</Th>
              <Th>Live On</Th>
              <Th>Brand</Th>
              <Th>Product Type</Th>
              <Th>Series</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products
              .filter(product => product.ean.startsWith(search)) 
              .map((product, index) => (
                <Tr key={index}>
                  <Td>
                    <input
                      type="checkbox"
                      checked={selectedProducts.has(index)}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </Td>
                  <Td>{product.status}</Td>
                  <Td><img src={product.image} alt="Product" width="50" /></Td>
                  <Td>{product.ean}</Td>
                  <Td>{product.qualityScore}</Td>
                  <Td>{product.liveOn}</Td>
                  <Td>{product.brand}</Td>
                  <Td>{product.productType}</Td>
                  <Td>{product.series}</Td>
                  <Td>
                    <IconButton
                      icon={<EditIcon />}
                      onClick={() => editProduct(index)}
                      aria-label="Edit Product"
                      color="#1D3CDA"
                      size="sm"
                      marginRight={2}
                    />
                    <IconButton
                      icon={<DeleteIcon />}
                      onClick={() => deleteProduct(index)}
                      aria-label="Delete Product"
                      color="#1D3CDA"
                      size="sm"
                    />
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Box>


      <Modal isOpen={isOpen} onClose={resetForm}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{editIndex !== null ? 'Edit Product' : 'Add a New Product'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired marginBottom={3}>
              <FormLabel>Status</FormLabel>
              <Input name="status" value={newProduct.status} onChange={handleChange} placeholder="Status" />
            </FormControl>
            <FormControl isRequired marginBottom={3}>
              <FormLabel>Image URL</FormLabel>
              <Input name="image" value={newProduct.image} onChange={handleChange} placeholder="Image URL" />
            </FormControl>
            <FormControl isRequired marginBottom={3}>
              <FormLabel>EAN</FormLabel>
              <Input name="ean" value={newProduct.ean} onChange={handleChange} placeholder="EAN" />
            </FormControl>
            <FormControl isRequired marginBottom={3}>
              <FormLabel>Quality Score</FormLabel>
              <Input name="qualityScore" value={newProduct.qualityScore} onChange={handleChange} placeholder="Quality Score" />
            </FormControl>
            <FormControl isRequired marginBottom={3}>
              <FormLabel>Live On</FormLabel>
              <Input name="liveOn" value={newProduct.liveOn} onChange={handleChange} placeholder="Live On" />
            </FormControl>
            <FormControl isRequired marginBottom={3}>
              <FormLabel>Brand</FormLabel>
              <Input name="brand" value={newProduct.brand} onChange={handleChange} placeholder="Brand" />
            </FormControl>
            <FormControl isRequired marginBottom={3}>
              <FormLabel>Product Type</FormLabel>
              <Input name="productType" value={newProduct.productType} onChange={handleChange} placeholder="Product Type" />
            </FormControl>
            <FormControl isRequired marginBottom={3}>
              <FormLabel>Series</FormLabel>
              <Input name="series" value={newProduct.series} onChange={handleChange} placeholder="Series" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" onClick={addProduct}>{editIndex !== null ? 'Update' : 'Save'}</Button>
            <Button variant="ghost" onClick={resetForm}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Panel;
