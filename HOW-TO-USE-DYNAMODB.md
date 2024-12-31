# AWS DynamoDB Assignment

## Overview

In this 1-hour assignment, you will learn how to create and interact with an Amazon DynamoDB table using the AWS Management Console. This foundational exercise introduces you to working with NoSQL databases in AWS by teaching you how to set up a table, add data, and query it effectively.

### Learning Objectives
- Create a DynamoDB table on AWS.
- Configure table settings such as primary keys and provisioned capacity.
- Add and query items using the AWS Management Console.

## Assignment Workflow

- Set Up a DynamoDB Table: Create a table with appropriate configurations.
- Add Items: Populate the table with sample data using JSON.
- Query Data: Use the AWS Management Console to search and scan data in the table.
- Explore Features (Optional): Experiment with Global Secondary Indexes (GSI) and performance metrics.
- Clean Up Resources: Remove all items and delete the table to avoid charges.

## Prerequisites

- An active AWS account.
- Basic familiarity with the AWS Management Console.


## Instructions
### Step 1: Create a DynamoDB Table

1. Sign in to the [AWS Management Console](https://aws.amazon.com/).
2. Navigate to the DynamoDB service.
    - You can search for DynamoDB and Select `DynamoDB` from the list of services. 
3. Click Create table and configure:
    ![create table](</img/DynamoDB/createTable.png>)
    - Table Name: Choose a unique name (e.g., my-products-table).
    - Partition Key: ProductID (String).
    - Leave Sort Key blank.
    - Set capacity mode to On-demand.
    ![table details](<img/DynamoDB/tableDetails.png>)
3. Click Create table to finalize.

### Step 2: Add Items to the Table
1. Open your table and navigate to the Items tab.
    - NOTE: In your tables list click on your table.
    ![table list](<img/DynamoDB/table.png>)
2. Click Create item  
    ![add items](<img/DynamoDB/createItemAction.png>)
    - Add an item using the JSON editor.
    ![item editor](<img/DynamoDB/createItemDetails.png>)
    - Example:
        ```json
        {
        "ProductID": "101",
        "Name": "Laptop",
        "Price": 1200,
        "Stock": 15
        }

3. Save the item and repeat for at least two more items with unique ProductID values.
![added items](<img/DynamoDB/addedItems.png>)

### Step 3: Query Data

* In the Items tab, click `query`.
![item list](<img/DynamoDB/itemList.png>)
* Enter a ProductID value and click Run to query specific data.
![query items](<img/DynamoDB/searchItem101.png>)
![first item](<img/DynamoDB/firstItem.png>)
* To view all items, click `Scan` and ensure all data is visible.
![scan items](<img/DynamoDB/scanItems.png>)
![returned scan items](<img/DynamoDB/scanItemReturn.png>)

### Step 4: Explore Additional Features (Optional)
* Create a Global Secondary Index (GSI):
    - Go to the Indexes tab.
    ![Create index](<img/DynamoDB/createIndex.png>)
    - Set the Index Name to PriceIndex and Partition Key to Price (Number).
    ![index details](<img/DynamoDB/indexDetails.png>)
    ![index list](<img/DynamoDB/indexList.png>)
    - Query items using the new index.
    ![search by index](<img/DynamoDB/searchByIndex.png>)
    ![search index return](<img/DynamoDB/indexSearchReturn.png>)
    - Explore Metrics to monitor table performance.
        - NOTE: You can get to the `metrics` by going to the `Monitor` tab when viewing your table. DynamoDB has several things that you can monitor for your tables, here is an example of `Successful Read Request`:
        ![table metrics](<img/DynamoDB/tableMetrics.png>)

### Step 5: Clean Up Resources
- Delete all items from the table via the Items tab.
![delete items](<img/DynamoDB/deleteItemsAction.png>)
![delete item return](<img/DynamoDB/deleteItemsReturn.png>)
- Delete the table from the Tables tab.
![delete table](<img/DynamoDB/deleteTable.png>)
- Remove additional resources like GSIs to prevent charges.

## Key Concepts Learned
- Partition Key: Uniquely identifies items in the table.
- On-demand Capacity Mode: Scales automatically based on usage without setting fixed read/write limits.
- Global Secondary Index (GSI): Allows queries on non-primary key attributes.

## Tips
- Use unique ProductID values for each item.
- Double-check partition key settings if queries fail.