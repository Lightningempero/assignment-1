/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./features/newsSlice.js":
/*!*******************************!*\
  !*** ./features/newsSlice.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getNewsArticles: () => (/* binding */ getNewsArticles)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _utils_fetchNews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/fetchNews */ \"./utils/fetchNews.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst getNewsArticles = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('news/getNewsArticles', async (params, { rejectWithValue })=>{\n    try {\n        const articles = await (0,_utils_fetchNews__WEBPACK_IMPORTED_MODULE_1__.fetchNews)(params);\n        return articles;\n    } catch (error) {\n        return rejectWithValue(error.message);\n    }\n});\nconst newsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'news',\n    initialState: {\n        articles: [],\n        status: 'idle',\n        error: null\n    },\n    reducers: {\n    },\n    extraReducers: (builder)=>{\n        builder.addCase(getNewsArticles.pending, (state)=>{\n            state.status = 'loading';\n        }).addCase(getNewsArticles.fulfilled, (state, action)=>{\n            state.status = 'succeeded';\n            state.articles = action.payload;\n        }).addCase(getNewsArticles.rejected, (state, action)=>{\n            state.status = 'failed';\n            state.error = action.payload;\n        });\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newsSlice.reducer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZWF0dXJlcy9uZXdzU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnRTtBQUNsQjtBQUV2QyxNQUFNRyxrQkFBa0JGLGtFQUFnQkEsQ0FDN0Msd0JBQ0EsT0FBT0csUUFBUSxFQUFFQyxlQUFlLEVBQUU7SUFDaEMsSUFBSTtRQUNGLE1BQU1DLFdBQVcsTUFBTUosMkRBQVNBLENBQUNFO1FBQ2pDLE9BQU9FO0lBQ1QsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsT0FBT0YsZ0JBQWdCRSxNQUFNQyxPQUFPO0lBQ3RDO0FBQ0YsR0FDRDtBQUVELE1BQU1DLFlBQVlULDZEQUFXQSxDQUFDO0lBQzVCVSxNQUFNO0lBQ05DLGNBQWM7UUFDWkwsVUFBVSxFQUFFO1FBQ1pNLFFBQVE7UUFDUkwsT0FBTztJQUNUO0lBQ0FNLFVBQVU7SUFFVjtJQUNBQyxlQUFlLENBQUNDO1FBQ2RBLFFBQ0dDLE9BQU8sQ0FBQ2IsZ0JBQWdCYyxPQUFPLEVBQUUsQ0FBQ0M7WUFDakNBLE1BQU1OLE1BQU0sR0FBRztRQUNqQixHQUNDSSxPQUFPLENBQUNiLGdCQUFnQmdCLFNBQVMsRUFBRSxDQUFDRCxPQUFPRTtZQUMxQ0YsTUFBTU4sTUFBTSxHQUFHO1lBQ2ZNLE1BQU1aLFFBQVEsR0FBR2MsT0FBT0MsT0FBTztRQUNqQyxHQUNDTCxPQUFPLENBQUNiLGdCQUFnQm1CLFFBQVEsRUFBRSxDQUFDSixPQUFPRTtZQUN6Q0YsTUFBTU4sTUFBTSxHQUFHO1lBQ2ZNLE1BQU1YLEtBQUssR0FBR2EsT0FBT0MsT0FBTztRQUM5QjtJQUNKO0FBQ0Y7QUFFQSxpRUFBZVosVUFBVWMsT0FBTyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxsZW5vdm9cXERvd25sb2Fkc1xcUmVzcG9uc2l2ZS1EYXNoYm9hcmQtd2l0aC1OZXdzLWFuZC1QYXlvdXQtRmVhdHVyZXNcXGZlYXR1cmVzXFxuZXdzU2xpY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyBmZXRjaE5ld3MgfSBmcm9tICcuLi91dGlscy9mZXRjaE5ld3MnXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TmV3c0FydGljbGVzID0gY3JlYXRlQXN5bmNUaHVuayhcclxuICAnbmV3cy9nZXROZXdzQXJ0aWNsZXMnLFxyXG4gIGFzeW5jIChwYXJhbXMsIHsgcmVqZWN0V2l0aFZhbHVlIH0pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGFydGljbGVzID0gYXdhaXQgZmV0Y2hOZXdzKHBhcmFtcylcclxuICAgICAgcmV0dXJuIGFydGljbGVzXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGVycm9yLm1lc3NhZ2UpXHJcbiAgICB9XHJcbiAgfVxyXG4pXHJcblxyXG5jb25zdCBuZXdzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ25ld3MnLFxyXG4gIGluaXRpYWxTdGF0ZToge1xyXG4gICAgYXJ0aWNsZXM6IFtdLFxyXG4gICAgc3RhdHVzOiAnaWRsZScsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICB9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICAvLyBJZiB5b3UgaGF2ZSBsb2NhbCBjbGllbnQtYmFzZWQgdXBkYXRlcyBvciBmaWx0ZXJzLCBoYW5kbGUgdGhlbSBoZXJlXHJcbiAgfSxcclxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xyXG4gICAgYnVpbGRlclxyXG4gICAgICAuYWRkQ2FzZShnZXROZXdzQXJ0aWNsZXMucGVuZGluZywgKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgc3RhdGUuc3RhdHVzID0gJ2xvYWRpbmcnXHJcbiAgICAgIH0pXHJcbiAgICAgIC5hZGRDYXNlKGdldE5ld3NBcnRpY2xlcy5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3RhdGUuc3RhdHVzID0gJ3N1Y2NlZWRlZCdcclxuICAgICAgICBzdGF0ZS5hcnRpY2xlcyA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIH0pXHJcbiAgICAgIC5hZGRDYXNlKGdldE5ld3NBcnRpY2xlcy5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnZmFpbGVkJ1xyXG4gICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgfSlcclxuICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3c1NsaWNlLnJlZHVjZXJcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiY3JlYXRlQXN5bmNUaHVuayIsImZldGNoTmV3cyIsImdldE5ld3NBcnRpY2xlcyIsInBhcmFtcyIsInJlamVjdFdpdGhWYWx1ZSIsImFydGljbGVzIiwiZXJyb3IiLCJtZXNzYWdlIiwibmV3c1NsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInN0YXR1cyIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsInN0YXRlIiwiZnVsZmlsbGVkIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlamVjdGVkIiwicmVkdWNlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./features/newsSlice.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/store */ \"./store/store.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_redux__WEBPACK_IMPORTED_MODULE_2__, _store_store__WEBPACK_IMPORTED_MODULE_3__]);\n([react_redux__WEBPACK_IMPORTED_MODULE_2__, _store_store__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction App({ Component, pageProps: { session, ...pageProps } }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n            store: _store_store__WEBPACK_IMPORTED_MODULE_3__.store,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Downloads\\\\Responsive-Dashboard-with-News-and-Payout-Features\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\lenovo\\\\Downloads\\\\Responsive-Dashboard-with-News-and-Payout-Features\\\\pages\\\\_app.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\Downloads\\\\Responsive-Dashboard-with-News-and-Payout-Features\\\\pages\\\\_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDWDtBQUNBO0FBQ1I7QUFFZixTQUFTRyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUUsR0FBR0QsV0FBVyxFQUFFO0lBQzdFLHFCQUNFLDhEQUFDTCw0REFBZUE7UUFBQ00sU0FBU0E7a0JBQ3hCLDRFQUFDTCxpREFBUUE7WUFBQ0MsT0FBT0EsK0NBQUtBO3NCQUNwQiw0RUFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxsZW5vdm9cXERvd25sb2Fkc1xcUmVzcG9uc2l2ZS1EYXNoYm9hcmQtd2l0aC1OZXdzLWFuZC1QYXlvdXQtRmVhdHVyZXNcXHBhZ2VzXFxfYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlc3Npb25Qcm92aWRlciB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi9zdG9yZS9zdG9yZSdcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHM6IHsgc2Vzc2lvbiwgLi4ucGFnZVByb3BzIH0gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3Nlc3Npb259PlxyXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICA8L1Nlc3Npb25Qcm92aWRlcj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlNlc3Npb25Qcm92aWRlciIsIlByb3ZpZGVyIiwic3RvcmUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _features_newsSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/newsSlice */ \"./features/newsSlice.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _features_newsSlice__WEBPACK_IMPORTED_MODULE_1__]);\n([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _features_newsSlice__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        news: _features_newsSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUQ7QUFDRjtBQUV4QyxNQUFNRSxRQUFRRixnRUFBY0EsQ0FBQztJQUNsQ0csU0FBUztRQUNQQyxNQUFNSCwyREFBV0E7SUFDbkI7QUFDRixHQUFFIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGxlbm92b1xcRG93bmxvYWRzXFxSZXNwb25zaXZlLURhc2hib2FyZC13aXRoLU5ld3MtYW5kLVBheW91dC1GZWF0dXJlc1xcc3RvcmVcXHN0b3JlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IG5ld3NSZWR1Y2VyIGZyb20gJy4uL2ZlYXR1cmVzL25ld3NTbGljZSdcclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiB7XHJcbiAgICBuZXdzOiBuZXdzUmVkdWNlcixcclxuICB9LFxyXG59KVxyXG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJuZXdzUmVkdWNlciIsInN0b3JlIiwicmVkdWNlciIsIm5ld3MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/store.js\n");

/***/ }),

/***/ "./utils/fetchNews.js":
/*!****************************!*\
  !*** ./utils/fetchNews.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchNews: () => (/* binding */ fetchNews)\n/* harmony export */ });\nasync function fetchNews() {\n    try {\n        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`);\n        const data = await res.json();\n        return data.articles || [];\n    } catch (error) {\n        console.error('Error fetching news:', error);\n        throw new Error('Failed to fetch news.');\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9mZXRjaE5ld3MuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLGVBQWVBO0lBQ2xCLElBQUk7UUFDRixNQUFNQyxNQUFNLE1BQU1DLE1BQ2hCLENBQUMsdURBQXVELEVBQUVDLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWSxFQUFFO1FBRXRGLE1BQU1DLE9BQU8sTUFBTUwsSUFBSU0sSUFBSTtRQUMzQixPQUFPRCxLQUFLRSxRQUFRLElBQUksRUFBRTtJQUM1QixFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7UUFDdEMsTUFBTSxJQUFJRSxNQUFNO0lBQ2xCO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGVub3ZvXFxEb3dubG9hZHNcXFJlc3BvbnNpdmUtRGFzaGJvYXJkLXdpdGgtTmV3cy1hbmQtUGF5b3V0LUZlYXR1cmVzXFx1dGlsc1xcZmV0Y2hOZXdzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaE5ld3MoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi90b3AtaGVhZGxpbmVzP2NvdW50cnk9dXMmYXBpS2V5PSR7cHJvY2Vzcy5lbnYuTkVXU19BUElfS0VZfWBcclxuICAgICAgKVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICByZXR1cm4gZGF0YS5hcnRpY2xlcyB8fCBbXVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgbmV3czonLCBlcnJvcilcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggbmV3cy4nKVxyXG4gICAgfVxyXG4gIH1cclxuICAiXSwibmFtZXMiOlsiZmV0Y2hOZXdzIiwicmVzIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVXU19BUElfS0VZIiwiZGF0YSIsImpzb24iLCJhcnRpY2xlcyIsImVycm9yIiwiY29uc29sZSIsIkVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/fetchNews.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reduxjs/toolkit");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-redux");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();