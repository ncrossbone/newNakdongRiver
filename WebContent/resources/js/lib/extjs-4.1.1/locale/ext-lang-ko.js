/**
 * Korean Translations By nicetip
 * 05 September 2007
 * Modify by techbug / 25 February 2008
 */
Ext.onReady(function() {
    var cm = Ext.ClassManager,
        exists = Ext.Function.bind(cm.get, cm);

    if (Ext.Updater) {
        Ext.Updater.defaults.indicatorText = '<div class="loading-indicator">�ε���...</div>';
    }

    Ext.define("Ext.locale.ko.view.View", {
        override: "Ext.view.View",
        emptyText: ""
    });

    Ext.define("Ext.locale.ko.grid.Panel", {
        override: "Ext.grid.Panel",
        ddText: "{0} ���� ���õǾ����ϴ�."
    });

    Ext.define("Ext.locale.ko.TabPanelItem", {
        override: "Ext.TabPanelItem",
        closeText: "�ݱ�"
    });

    Ext.define("Ext.locale.ko.form.field.Base", {
        override: "Ext.form.field.Base",
        invalidText: "�ùٸ� ���� �ƴմϴ�."
    });

    // changing the msg text below will affect the LoadMask
    Ext.define("Ext.locale.ko.view.AbstractView", {
        override: "Ext.view.AbstractView",
        msg: "�ε���..."
    });

    if (Ext.Date) {
        Ext.Date.monthNames = ["1��", "2��", "3��", "4��", "5��", "6��", "7��", "8��", "9��", "10��", "11��", "12��"];

        Ext.Date.dayNames = ["��", "��", "ȭ", "��", "��", "��", "��"];
    }
    if (Ext.MessageBox) {
        Ext.MessageBox.buttonText = {
            ok: "Ȯ��",
            cancel: "���",
            yes: "��",
            no: "�ƴϿ�"
        };
    }

    if (exists('Ext.util.Format')) {
        Ext.apply(Ext.util.Format, {
            thousandSeparator: ',',
            decimalSeparator: '.',
            currencySign: '\u20a9',
            // Korean Won
            dateFormat: 'm/d/Y'
        });
    }

    Ext.define("Ext.locale.ko.picker.Date", {
        override: "Ext.picker.Date",
        todayText: "����",
        minText: "�ּ� ��¥������ �Ѿ����ϴ�.",
        maxText: "�ִ� ��¥������ �Ѿ����ϴ�.",
        disabledDaysText: "",
        disabledDatesText: "",
        monthNames: Ext.Date.monthNames,
        dayNames: Ext.Date.dayNames,
        nextText: '������(��Ʈ��Ű+������ ȭ��ǥ)',
        prevText: '������ (��Ʈ��Ű+���� ȭ��ǥ)',
        monthYearText: '���� �������ּ���. (��Ʈ��Ű+��/�Ʒ� ȭ��ǥ)',
        todayTip: "{0} (�����̽���)",
        format: "m/d/y",
        startDay: 0
    });

    Ext.define("Ext.locale.ko.picker.Month", {
        override: "Ext.picker.Month",
        okText: "Ȯ��",
        cancelText: "���"
    });

    Ext.define("Ext.locale.ko.toolbar.Paging", {
        override: "Ext.PagingToolbar",
        beforePageText: "������",
        afterPageText: "/ {0}",
        firstText: "ù ������",
        prevText: "���� ������",
        nextText: "���� ������",
        lastText: "������ ������",
        refreshText: "���ΰ�ħ",
        displayMsg: "��ü {2} �� {0} - {1}",
        emptyMsg: 'ǥ���� �����Ͱ� �����ϴ�.'
    });

    Ext.define("Ext.locale.ko.form.field.Text", {
        override: "Ext.form.field.Text",
        minLengthText: "�ּұ��̴� {0}�Դϴ�.",
        maxLengthText: "�ִ���̴� {0}�Դϴ�.",
        blankText: "���� �Է����ּ���.",
        regexText: "",
        emptyText: null
    });

    Ext.define("Ext.locale.ko.form.field.Number", {
        override: "Ext.form.field.Number",
        minText: "�ּҰ��� {0}�Դϴ�.",
        maxText: "�ִ밪�� {0}�Դϴ�.",
        nanText: "{0}�� �ùٸ� ���ڰ� �ƴմϴ�."
    });

    Ext.define("Ext.locale.ko.form.field.Date", {
        override: "Ext.form.field.Date",
        disabledDaysText: "��Ȱ��",
        disabledDatesText: "��Ȱ��",
        minText: "{0}�� ���Ŀ��� �մϴ�.",
        maxText: "{0}�� �����̾�� �մϴ�.",
        invalidText: "{0}�� �ùٸ� ��¥������ �ƴմϴ�. - ������ ���� �����̾�� �մϴ�. {1}",
        format: "m/d/y"
    });

    Ext.define("Ext.locale.ko.form.field.ComboBox", {
        override: "Ext.form.field.ComboBox",
        valueNotFoundText: undefined
    }, function() {
        Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig, {
            loadingText: "�ε���..."
        });
    });

    if (exists('Ext.form.field.VTypes')) {
        Ext.apply(Ext.form.field.VTypes, {
            emailText: '�̸��� �ּ� ���Ŀ� �°� �Է��ؾ��մϴ�. (��: "user@example.com")',
            urlText: 'URL ���Ŀ� �°� �Է��ؾ��մϴ�. (��: "http:/' + '/www.example.com")',
            alphaText: '����, ����(_)�� �Է��� �� �ֽ��ϴ�.',
            alphanumText: '����, ����, ����(_)�� �Է��� �� �ֽ��ϴ�.'
        });
    }

    Ext.define("Ext.locale.ko.form.field.HtmlEditor", {
        override: "Ext.form.field.HtmlEditor",
        createLinkText: 'URL�� �Է����ּ���:'
    }, function() {
        Ext.apply(Ext.form.field.HtmlEditor.prototype, {
            buttonTips: {
                bold: {
                    title: '���� (Ctrl+B)',
                    text: '������ �ؽ�Ʈ�� ���� ǥ���մϴ�.',
                    cls: Ext.baseCSSPrefix + 'html-editor-tip'
                },
                italic: {
                    title: '����Ӳ� (Ctrl+I)',
                    text: '������ �ؽ�Ʈ�� ����Ӳ÷� ǥ���մϴ�.',
                    cls: Ext.baseCSSPrefix + 'html-editor-tip'
                },
                underline: {
                    title: '���� (Ctrl+U)',
                    text: '������ �ؽ�Ʈ�� ������ ǥ���մϴ�.',
                    cls: Ext.baseCSSPrefix + 'html-editor-tip'
                },
                increasefontsize: {
                    title: '�۲�ũ�� �ø�',
                    text: '�۲� ũ�⸦ ũ�� �մϴ�.',
                    cls: Ext.baseCSSPrefix + 'html-editor-tip'
                },
                decreasefontsize: {
                    title: '�۲�ũ�� ����',
                    text: '�۲� ũ�⸦ �۰� �մϴ�.',
                    cls: Ext.baseCSSPrefix + 'html-editor-tip'
                },
                backcolor: {
                    title: '�ؽ�Ʈ ���� ��',
                    text: '������ �ؽ�Ʈ�� ������ �����մϴ�.',
                    cls: Ext.baseCSSPrefix + 'html-editor-tip'
                },
                forecolor: {
                    title: '�۲û�',
                    text: '������ �ؽ�Ʈ�� ���� �����մϴ�.',
                    cls: Ext.baseCSSPrefix + 'html-editor-tip'
                },
                justifyleft: {
                    title: '�ؽ�Ʈ ���� ����',
                    text: '���ʿ� �ؽ�Ʈ�� ����ϴ�.',
                    cls: Ext.baseCSSPrefix + 'html-editor-tip'
                },
                justifycenter: {
                    title: '��� ����',
                    text: '����� �ؽ�Ʈ�� ����ϴ�.',
                    cls: Ext.baseCSSPrefix + 'html-editor-tip'
                },
                justifyright: {
                    title: '�ؽ�Ʈ ������ ����',
                    text: '�����ʿ� �ؽ�Ʈ�� ����ϴ�.',
                    cls: Ext.baseCSSPrefix + 'html-editor-tip'
                },
                insertunorderedlist: {
                    title: '�۸Ӹ� ��ȣ',
                    text: '�۸Ӹ� ��ȣ ����� �����մϴ�.',
                    cls: Ext.baseCSSPrefix + 'html-editor-tip'
                },
                insertorderedlist: {
                    title: '��ȣ �ű��',
                    text: '��ȣ �ű�� ����� �����մϴ�.',
                    cls: Ext.baseCSSPrefix + 'html-editor-tip'
                },
                createlink: {
                    title: '�����۸�ũ',
                    text: '������ �ؽ�Ʈ�� �����۸�ũ�� ����ϴ�.',
                    cls: Ext.baseCSSPrefix + 'html-editor-tip'
                },
                sourceedit: {
                    title: '�ҽ�����',
                    text: '�ҽ����� ���� ��ȯ�մϴ�.',
                    cls: Ext.baseCSSPrefix + 'html-editor-tip'
                }
            }
        });
    });

    Ext.define("Ext.locale.ko.grid.header.Container", {
        override: "Ext.grid.header.Container",
        sortAscText: "�������� ����",
        sortDescText: "�������� ����",
        lockText: "Į�� ���",
        unlockText: "Į�� �������",
        columnsText: "Į�� ���"
    });

    Ext.define("Ext.locale.ko.grid.GroupingFeature", {
        override: "Ext.grid.GroupingFeature",
        emptyGroupText: '(None)',
        groupByText: '���� �ʵ�� �׷����մϴ�.',
        showGroupsText: '�׷����� �����ֱ�'

    });

    Ext.define("Ext.locale.ko.grid.PropertyColumnModel", {
        override: "Ext.grid.PropertyColumnModel",
        nameText: "�׸�",
        valueText: "��",
        dateFormat: "m/j/Y"
    });

});
