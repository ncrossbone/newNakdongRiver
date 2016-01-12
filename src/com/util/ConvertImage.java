package com.util;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FilenameFilter;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.Date;

import org.apache.batik.transcoder.TranscoderException;
import org.apache.batik.transcoder.TranscoderInput;
import org.apache.batik.transcoder.TranscoderOutput;
import org.apache.batik.transcoder.image.PNGTranscoder;

public class ConvertImage {

	public String getImageStream(String svgTag) {
		cleanOldImage();
		String fileName = "";

		PNGTranscoder t = new PNGTranscoder();
		try {
			svgTag = URLDecoder.decode(svgTag, "UTF-8");
			svgTag = svgTag.trim();
		} catch (UnsupportedEncodingException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}

		TranscoderInput input = null;
		try {
			input = new TranscoderInput(new ByteArrayInputStream(
					svgTag.getBytes("UTF-8")));
		} catch (UnsupportedEncodingException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		OutputStream ostream = null;
		try {
			String path = getPath();

			Date date = new Date();
			String time = ((Long) date.getTime()).toString()
					+ ((Integer) ((int) (Math.random() * 100000))).toString();
			fileName = time + ".png";

			ostream = new FileOutputStream(path + "/" + time + ".png");
		} catch (FileNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		TranscoderOutput output = new TranscoderOutput(ostream);

		try {
			t.transcode(input, output);
		} catch (TranscoderException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		try {
			ostream.flush();
			ostream.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return fileName;
	}

	private String getPath() {
		String path = ConvertImage.class.getResource("").getPath();
		File file = new File(path);
		file = file.getParentFile().getParentFile().getParentFile().getParentFile();
		File[] files = file.listFiles();
		String name = "";
		for (int a = 0; a < files.length; a++) {
			name = files[a].getName();
			if (name.equals("resources")) {
				file = files[a];
				a = files.length + 1;
				files = null;
				files = file.listFiles();

				for (int b = 0; b < files.length; b++) {
					name = files[b].getName();
					if (name.equals("download")) {
						file = files[b];
						break;
					}
				}
			}
		}

		path = file.getPath();

		return path;
	}

	private void cleanOldImage() {
		String path = getPath();
		
		File file = new File(path);
		File[] files = file.listFiles();
		Date date = new Date();
		long nowTime = date.getTime();
		
		for (int a = 0; a < files.length; a++) {
			long lastModifiedTime = files[a].lastModified();
			
			if(nowTime - lastModifiedTime > 300000){
				files[a].delete();
			}
		}
	}
}
