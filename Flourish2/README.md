# Flourish Visualization – Seattle Fire 911 Calls

## Dataset
This project uses the **Seattle Fire 911 Calls** dataset from Seattle Open Data. The dataset includes records of emergency incidents with details such as call type, location, and date/time.

Source: https://data.seattle.gov/Public-Safety/Seattle-Real-Time-Fire-911-Calls/kzjm-xkqj/about_data

## Visualization
I created a bar chart in Flourish showing the **top 10 most common Seattle Fire 911 call types between April 2023 and April 2026**. The chart highlights how frequently each type of incident occurs.

The main takeaway is that **Aid Response is by far the most common call type**, significantly higher than all others.

## Data Cleaning / Preparation
I used R to prepare the data before uploading it to Flourish. The steps included:
- removing missing or blank values in the call type column  
- counting the number of incidents for each call type  
- selecting the top 10 most frequent categories  
- exporting the cleaned data as a CSV file  

## Files Included
- `Seattle_Fire_911_Calls.xlsx` (original dataset)  
- `top10_calls.csv` (cleaned data used for visualization)  
- `Fire_Calls_Chart.png` (exported Flourish visualization)

## Notes
This visualization summarizes raw incident-level data into a simpler format to make patterns easier to understand. It is meant to show overall trends in the most common types of emergency calls in Seattle.
