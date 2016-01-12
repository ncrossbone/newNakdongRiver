package com.util;

public class StringUtil {

	/**
	 * object�� toString()��ȯ���� �����Ѵ�. ���� object�� null�� ��� ���ڿ��� �����Ѵ�.
	 *
	 * @param object Object
	 * @return String ��ȯ��
	 */
	public static String getString(Object object) {
		return object == null ? "" : object.toString();
	}

	/**
	 * <pre>
	 * str���� rep�� �ش��ϴ� String�� tok�� replace�Ѵ�.
	 * "select * from TEST", "*", "USER"
	 * -> "select USER from TEST"
	 * </pre>
	 *
	 * @param str ������ ���ڿ�.
	 * @param rep ������ ����.
	 * @param tok ����� ����.
	 * @return ����� ���ڿ�.
	 */
	public static String getReplace(String str, String rep, String tok) {
		String retStr = "";
		if(str == null) return "";
		if(str.equals("")) return "";

		for(int i=0, j=0; (j = str.indexOf(rep,i)) > -1; i=j+rep.length()) {
			retStr += (str.substring(i,j) + tok);
		}
		return (str.indexOf(rep) == -1) ? str : retStr + str.substring(str.lastIndexOf(rep)+rep.length(),str.length());
	}

	/**
	 * <pre>
	 * �Է� ���ڿ��� Camel-case�� �����Ѵ�.
	 *
	 * �ۼ���: Ȳ����
	 * ��  ��: (��)���ﾾ�ؾ�
	 * �ۼ���: 2012. 3. 19.
	 * </pre>
	 *
	 * @param str	������ ���ڿ�
	 * @param isClass	true : ù ���ڸ� �빮�ڷ� ó��, false : ù ���ڸ� �ҹ��ڷ� ó��
	 * @return
	 */
	public static String toCamelCase(String str, Boolean isClass) {
		if (str == null || str.length() == 0) {
			return str;
		}

		StringBuffer result = new StringBuffer();

		/*
		 * 1. Change source string to LOWER CASE
		 * 2. Pretend space before first character
		 */
		String sourceText = str.toLowerCase().replaceAll("\\s+", "_");

		char prevChar = ' ';

		/*
		 * Change underscore to space
		 */
		for (int i = 0; i < sourceText.length(); i++) {
			char c = sourceText.charAt(i);
			if (c == '_') {
			} else if (prevChar == ' ' || prevChar == '_') {
				if (i == 0)
					if (isClass)
						result.append(Character.toUpperCase(c));
					else
						result.append(c);
				else
					result.append(Character.toUpperCase(c));
			} else if (Character.isUpperCase(c) && !Character.isUpperCase(prevChar)) {
				if (i == 0)
					if (isClass)
						result.append(Character.toUpperCase(c));
					else
						result.append(c);
				else
					result.append(Character.toUpperCase(c));
			} else {
				result.append(c);
			}

			prevChar = c;
		}

		return result.toString();
	}

	/**
	 * <pre>
	 * Exception �� StackTraceElement�� ��Ƽ�������� ����Ѵ�.
	 *
	 * �ۼ���: Ȳ����
	 * ��  ��: (��)���ﾾ�ؾ�
	 * �ۼ���: 2012. 3. 20.
	 * </pre>
	 *
	 * @param ste	Exception �� StackTraceElement �迭
	 * @return
	 * @throws Exception
	 */
	public static String getStackTraceElementText(StackTraceElement[] ste) {
		StringBuffer buf = new StringBuffer();
		for(int i = 0; i < ste.length; i++) {
			buf.append("\n" + ste[i].toString());
		}

		return buf.toString();
	}

}
