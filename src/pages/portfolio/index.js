// // import React from "react";
// import "./style.css";
// import { Helmet, HelmetProvider } from "react-helmet-async";
// import { Container, Row, Col } from "react-bootstrap";
// import { dataportfolio, meta } from "../../content_option";

// export const Portfolio = () => {
//   return (
//     <HelmetProvider>
//       <Container className="About-header">
//         <Helmet>
//           <meta charSet="utf-8" />
//           <title> Portfolio | {meta.title} </title>
//           <meta name="description" content={meta.description} />
//         </Helmet>
//         <Row className="mb-5 mt-3 pt-md-3">
//           <Col lg="8">
//             <h1 className="display-4 mb-4"> Portfolio </h1>
//             <hr className="t_border my-4 ml-0 text-left" />
//           </Col>
//         </Row>
//         <div className="mb-5 po_items_ho">
//           {dataportfolio.map((data, i) => {
//             return (
//               <div key={i} className="po_item">
//                 <img src={data.your_img_url} alt="" />
//                 <div className="content">
//                   <p>{data.description}</p>
//                   {/* <a href={data.link}>view project</a> */}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </Container>
//     </HelmetProvider>
//   );
// };


// import React, { useState } from "react";
// import "./style.css";
// import { Helmet, HelmetProvider } from "react-helmet-async";
// import { Container, Row, Col, Modal } from "react-bootstrap";
// import { dataportfolio, meta } from "../../content_option";

// export const Portfolio = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const openModal = (image) => {
//     setSelectedImage(image);
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <HelmetProvider>
//       <Container className="About-header">
//         <Helmet>
//           <meta charSet="utf-8" />
//           <title> Portfolio | {meta.title} </title>
//           <meta name="description" content={meta.description} />
//         </Helmet>
//         <Row className="mb-5 mt-3 pt-md-3">
//           <Col lg="8">
//             <h1 className="display-4 mb-4"> Portfolio </h1>
//             <hr className="t_border my-4 ml-0 text-left" />
//           </Col>
//         </Row>
//         <div className="mb-5 po_items_ho">
//           {dataportfolio.map((data, i) => {
//             return (
//               <div
//                 key={i}
//                 className="po_item"
//                 onClick={() => openModal(data.your_img_url)}
//               >
//                 <img src={data.your_img_url} alt="" />
//                 <div className="content">
//                   <p>{data.description}</p>
//                   {/* <a href={data.link}>view project</a> */}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </Container>

//       <Modal
//         show={selectedImage !== null}
//         onHide={closeModal}
//         centered
//         dialogClassName="modal-center"
//       >
//         <Modal.Header closeButton></Modal.Header>
//         <Modal.Body>
//           <img
//             src={selectedImage}
//             alt=""
//             className="full-size-image"
//             style={{ margin: "0 auto", display: "block" }}
//           />
//         </Modal.Body>
//       </Modal>
//     </HelmetProvider>
//   );
// };



import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        {dataportfolio.map((group, i) => {
          return (
            <div key={i}> 
              <h1>{group.title}</h1>
              <div className="mb-5 po_items_ho">
                {group.images.map((data, j) => {
                  return (
                    <div
                      key={j}
                      className="po_item"
                      onClick={() => openModal(data.your_img_url)}
                      style={{display: "flex", alignItems: "center"}}
                    >
                      <img src={data.your_img_url} alt={group.title} />
                      <div className="content">
                        <p>Click to View</p>
                        {/* <a href={data.link}>view project</a> */}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </Container>

      <Modal
        show={selectedImage !== null}
        onHide={closeModal}
        centered
        dialogClassName="modal-center"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img
            src={selectedImage}
            alt=""
            className="full-size-image"
            style={{ margin: "0 auto", display: "block", width: "auto", maxHeight: "90vh" }}
          />
        </Modal.Body>
      </Modal>
    </HelmetProvider>
  );
};
