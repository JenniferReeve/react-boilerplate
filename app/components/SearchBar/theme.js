const theme = {
  container: {
    position: 'relative'
  },
  containerOpen: 'react-autosuggest__container--open',
  input: {
    'border': '1px solid #999',
    'borderEadius': '2px',
    'WebkitBoxShadow': 'none',
    'boxShadow': 'none',
    'color': '#404040',
    'fontSize': '16px',
    'height': '100%',
    'marginRight': '16px',
    'outline': 'none',
    'padding': '0 12px'
  },
  inputOpen: {
    'border-bottom-left-radius':  '0',
    'border-bottom-right-radius': '0'
  },
  inputFocused: {
    'outline': 'none'
  },
  suggestionsContainer: {
      'borderTop': '1px dashed #ccc'
  },
  suggestionsContainerOpen: {
      "display":"block",
      "position":"absolute",
      "top":"51px",
      "width":"280px",
      "border":"1px solid 4px",
      "backgroundColor":"#fff",
      "fontFamily":"'Open Sans', sans-serif",
      "fontWeight":"300",
      "fontSize":"16th",
      "borderBottomLeftRadius":"4px",
      "borderBottomRightRadius":"4px",
      "zIndex":"2"
  },
  suggestionsList: {
    'margin': '0',
    'padding': '0',
    'list-style-type': 'none'
  },
  suggestion: {
    'cursor': 'pointer',
    'padding': '10px 20px'
  },
  suggestionFirst: 'react-autosuggest__suggestion--first',
  suggestionHighlighted: {
    'background-color': '#ddd'
  },
  sectionContainer: {
    'borderTop': '1px dashed #ccc'
  },
  sectionContainerFirst: {
    'borderTop': '0'
  },
  sectionTitle: {
    'padding': '10px 0 0 10px',
    'fontSize': '12px',
    'color': '#777'
  }
};

export default theme;