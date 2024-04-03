package com.br.qrcode.resource;

import com.br.qrcode.config.RestApiController;
import com.br.qrcode.service.QrCodeService;
import com.google.zxing.WriterException;
import jakarta.servlet.ServletContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.IOException;
import java.io.InputStream;
import java.util.Base64;

@RestApiController("generator")
public class QrCodeResource {

    @Autowired
    QrCodeService qrCodeService;

    @Autowired
    private ServletContext servletContext;

    private static final String QR_CODE_IMAGE_PATH = "./src/main/resources/static/img/QRCode.png";

    @CrossOrigin
    @PostMapping("/qr-code")
    public ResponseEntity<byte[]> gerarQrCode(@RequestBody String texto) throws Exception {
        byte[] image = new byte[0];
        try {

            // Generate and Return Qr Code in Byte Array
            image = qrCodeService.getQRCodeImage(texto,250,250);

            // Generate and Save Qr Code Image in static/image folder
            qrCodeService.gerarImagemQrCode(texto,250,250,QR_CODE_IMAGE_PATH);

        } catch (WriterException | IOException e) {
            e.printStackTrace();
        }

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_PNG);
        headers.setContentLength(image.length);
        return new ResponseEntity<>(image, headers, HttpStatus.OK);
    }
}
