from alignments import handleCustomAln, handleStructureRequests, mapStrucSeqToAln, alignment_query_and_build
from django.urls import include, path
from django.views.generic.base import RedirectView
from django.contrib.staticfiles.storage import staticfiles_storage
from . import views

app_name = 'alignments'

urlpatterns = [
    path('', views.index, name='index'),
    path('favicon.ico', RedirectView.as_view(url=staticfiles_storage.url('img/faviconR.png'))),
    path('showTaxonomy', views.buildTaxonomy, name='showTaxonomy'),
    path('flush-session', views.flushSession, name='flushSession'),
    path('showStrucTaxonomy', views.buildFoldTaxonomy, name='showStrucTaxonomy'),
    path('showTaxonomy-api/<int:current_tax>', views.api_showTaxonomy, name='api_showTaxonomy'),
    #path('entropy/<str:align_name>/<int:tax_group>/<str:anchor_structure>', views.entropy, name='entropy'),
    path('orthologs/twincons/<str:anchor_structure>/<str:chain>/<str:align_name>/<int:tax_group1>/<int:tax_group2>/<int:minIndex>/<int:maxIndex>', views.twincons_handler, name='twincons'),
    path('orthologs/twincons/<str:anchor_structure>/<str:chain>/<str:align_name>/<int:tax_group1>/<int:tax_group2>', views.twincons_handler, name='twincons'),
    path('twincons/<str:anchor_structure>/<str:chain>/<str:align_name>/<int:tax_group1>/<int:tax_group2>', views.twincons_handler, name='twincons'),
    path('entropy-api/<str:align_name>/<int:tax_group>/<str:anchor_structure>', views.api_entropy, name='api_entropy'),
    path('twc-api/<str:align_name>/<int:tax_group1>/<int:tax_group2>/<str:anchor_structure>', views.api_twc, name='api_twc'),
    path('twc-api/', views.api_twc_parameterless, name='api_twc'),
    path('mapSeqAln/', mapStrucSeqToAln.make_map_from_alnix_to_sequenceix_new, name='mapping_aln_to_seq'),
    path('mapSeqAlnOrig/', views.make_map_from_alnix_to_sequenceix, name='mapping_aln_to_seq'),
    path('twc-api/<str:align_name>/<int:tax_group1>/<int:tax_group2>', views.api_twc, name='api_twc_no_struc'),
    path('resi-api/<int:resi_id>', views.resi_info),
    path('struc-api/<int:struc_id>', views.struc_info),
    path('fold-api/<int:fold_id>', views.fold_info),
    path('paralog-aln-api/<int:aln_id>', alignment_query_and_build.para_aln),
    path('ortholog-aln-api/<int:aln_id>/<int:tax_group>', views.simple_fasta),
    path('ortholog-aln-api/<str:protein_type>/<str:aln_name>/<int:tax_group>', views.string_fasta, name = 'ortholog_string_aln_api'),
    path('ortholog-aln-api/<str:protein_type>/<str:aln_name>/<str:tax_group>', views.string_fasta, name = 'ortholog_string_aln_api'),
    path('ortholog-aln-api/<int:aln_id>/<str:tax_group>', views.simple_fasta, name ='ortholog_aln_api'),
    path('orthologs/twc-api/<str:align_name>/<int:tax_group1>/<int:tax_group2>/<str:anchor_structure>', views.api_twc, name='api_twc'),
    path('orthologs/upload/twincons/<str:anchor_structure>/<str:chain>/<int:minIndex>/<int:maxIndex>', views.twincons_handler, name='twc_with_upload'),
    path('orthologs/upload/twincons/<str:anchor_structure>/<str:chain>', views.twincons_handler, name='twc_with_upload'),
    path('upload/twc-api/<str:anchor_structure>', views.api_twc_with_upload, name='api_twc_with_upload'),
    path('upload-custom-csv/<str:anchor_structure>/<str:chain>', views.twincons_handler, name='custom_csv_data_viewer'),
    path('custom-csv-data', views.upload_custom_data_for_mapping, name='custom_csv_data_handler'),
    path('custom-aln-data', handleCustomAln.handle_custom_upload_alignment, name='custom_aln_data_handler'),
    path('custom-aln-data-nocdhit', handleCustomAln.getUntruncAln, name='custom_aln_data_handler_without_cdhitTrunc'),
    path('upload-custom-csv/', views.upload_custom_data, name='upload_custom_data'),
    path('protein-contacts/<str:pdbid>/<str:chain_id>', views.protein_contacts, name = 'protein_contacts'),
    path('modified-residues/<str:pdbid>/<str:chain_id>', views.modified_residues, name = 'modified_residues'),
    path('r2dt/<str:sequence>/', views.r2dt, name = 'r2dt'),
    path('custom-struc-data/<str:strucID>', handleStructureRequests.handleCustomUploadStructure, name = 'custom_structure'),
    path('proteinTypes', views.proteinTypes, name = 'proteinTypes'),
    path('allProteinTypes', views.allProteinTypes, name = 'allProteinTypes'),
    path('proteinTypes/<str:concatenatedTaxIds>', views.proteinTypesDirect, name = 'proteinTypesDirect'),
    path('getAlignmentsFilterByProteinTypeAndTaxIds', views.getAlignmentsFilterByProteinTypeAndTaxIds, name = 'getAlignmentsFilterByProteinTypeAndTaxIds'),
    path('getAlignmentsFilterByProteinTypeAndTaxIds/<str:concatenatedProteinTypes>/<str:concatenatedTaxIds>', views.getAlignmentsFilterByProteinTypeAndTaxIdsDirect, name = 'getAlignmentsFilterByProteinTypeAndTaxIds'),
    path('getAlignmentsFilterByProteinType', views.getAlignmentsFilterByProteinTypeDirect, name = 'getAlignmentsFilterByProteinType'),
    path('getAlignmentsFilterByProteinType/<str:concatenatedProteinTypes>', views.getAlignmentsFilterByProteinTypeDirect, name = 'getAlignmentsFilterByProteinType'),
    path('getStrainsFilterByMoleculeGroupAndAlignment/<str:concatenatedMoleculeGroups>/<str:concatenatedAlignmentNames>', views.getStrainsFilterByMoleculeGroupAndAlignmentDirect, name = 'getStrainsFilyerByAlignment'),
    path('getAlignmentFilterByNameAndMoleculeGroupTrimByStrainId/<str:concatenatedMoleculeGroups>/<str:concatenatedAlignmentNames>/<str:concatenatedStrainIds>', views.getAlignmentFilterByNameAndMoleculeGroupTrimByStrainIdDirect, name = 'getAlignmentFilterByNameAndMoleculeGroupTrimByStrainIdDirect'),
    path('getGenusFromStrainIds/<str:concatenatedStrainIds>', views.getGenusFromStrainIdsDirect, name = 'getGenusFromStrain'),
    path('getPairwiseAlignment/<str:moleculeType>/<str:alignmentName>/<str:strainId0>/<str:strainId1>', views.getPairwiseAlignmentDirect, name = 'getPairwiseAlignment'),

]