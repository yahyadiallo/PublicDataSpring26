library(readxl)
library(dplyr)
library(readr)

# load data
data <- read_excel("Seattle_Fire_911_Calls.xlsx")

# count call types and get top 10
top10 <- data %>%
  count(Type, sort = TRUE) %>%
  head(10)

# save for Flourish
write_csv(top10, "top10_calls.csv")
