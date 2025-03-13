import React from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  text: {
    margin: 10,
    fontSize: 12,
    textAlign: 'justify'
  },
  title: {
    margin: 10,
    fontSize: 24,
    textAlign: 'center'
  }
});

// Create Document Component
// Very rough PDF file, needs tweaking in the future
function QuoteDocument({ quoteDetails, quoteSummary }) {

  const { app_type, page_num, features_required, complexity, quote } = quoteDetails;
  const summaryText = quoteSummary;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.text}>Quote Details</Text>
          <Text style={styles.text}>App Type: {app_type}</Text>
          <Text style={styles.text}>Number of Pages: {page_num}</Text>
          <Text style={styles.text}>Features Required: {features_required}</Text>
          <Text style={styles.text}>Complexity: {complexity}</Text>
          <Text style={styles.text}>Quote: {quote}</Text>
          <Text style={styles.text}>Summary:</Text>
          <Text style={styles.text}>{summaryText}</Text>
        </View>
      </Page>
    </Document>
  );
}

export { QuoteDocument };