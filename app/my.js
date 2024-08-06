import prisma from "./db.server.js";

// Fetch all records
export const getRecords = async () => {
  try {
    const records = await prisma.mySection.findMany();
    console.log("Fetched records:", records); // Log fetched records
    return records;
  } catch (error) {
    console.error('Error fetching records:', error.message); // Log error details
    throw error;
  }
};

// Insert a new record
export const insertRecord = async (data) => {
  try {
    const newRecord = await prisma.mySection.create({
      data,
    });
    console.log("Inserted record:", newRecord);
    return newRecord;
  } catch (error) {
    console.error('Error inserting record:', error.message);
    throw error;
  }
};

// Update a record
export const updateRecord = async (id, data) => {
  try {
    const updatedRecord = await prisma.mySection.update({
      where: { id },
      data,
    });
    console.log("Updated record:", updatedRecord);
    return updatedRecord;
  } catch (error) {
    console.error('Error updating record:', error.message);
    throw error;
  }
};

// Delete a record
export const deleteRecord = async (id) => {
  try {
    const deletedRecord = await prisma.mySection.delete({
      where: { id },
    });
    console.log("Deleted record:", deletedRecord);
    return deletedRecord;
  } catch (error) {
    console.error('Error deleting record:', error.message);
    throw error;
  }
};

// Example usage
(async () => {
  try {
    console.log('Starting script...');

    // Fetch all records
    console.log('Fetching records...');
    const records = await getRecords();
    console.log('Records:', records);

    // Insert a new record
    console.log('Inserting record...');
    const newRecord = await insertRecord({
      name: "Sample Name", // Ensure name is included
      category: "General", // Ensure category is included
      pricingType: "Standard", // Ensure pricingType is included
      description: "A sample description",
      image: ["https://example.com/image.jpg"],
      price: 100.0,
      discount: 10.0,
      tags: "example, sample",
    });
    console.log('Inserted record:', newRecord);

    // Update a record
    console.log('Updating record...');
    const updatedRecord = await updateRecord(newRecord.id, {
      price: 120.0,
    });
    console.log('Updated record:', updatedRecord);

    // Delete a record
    console.log('Deleting record...');
    const deletedRecord = await deleteRecord(updatedRecord.id);
    console.log('Deleted record:', deletedRecord);

    console.log('Script completed successfully.');
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
